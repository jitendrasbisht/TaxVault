import { useCallback, useEffect, useState } from "react";

import { createTaxProfile, getTaxProfile, updateTaxProfile } from "../services/taxProfileService";
import { TaxProfile } from "../types/taxProfile";

export type TaxProfileValidationErrors = {
  financial_year?: string;
  income_sources?: string;
};

export type TaxProfileValidationResult = {
  isValid: boolean;
  errors: TaxProfileValidationErrors;
  isSaveEligible: boolean;
};

function buildPayload(profile: TaxProfile, clientId: number) {
  const { id: _id, client_id, ...rest } = profile;

  return {
    client_id: client_id ?? clientId,
    ...rest,
  };
}

function createDefaultProfile(clientId: number): TaxProfile {
  return {
    id: 0,
    client_id: clientId,
    salary_income: false,
    business_income: false,
    house_property: false,
    capital_gain: false,
    other_sources: false,
    foreign_assets: false,
    regime: "NEW",
    financial_year: "",
  };
}

function toComparableProfile(profile: TaxProfile) {
  return {
    salary_income: profile.salary_income,
    business_income: profile.business_income,
    house_property: profile.house_property,
    capital_gain: profile.capital_gain,
    other_sources: profile.other_sources,
    foreign_assets: profile.foreign_assets,
    regime: profile.regime,
    financial_year: profile.financial_year,
  };
}

function profilesMatch(left: TaxProfile, right: TaxProfile) {
  return JSON.stringify(toComparableProfile(left)) === JSON.stringify(toComparableProfile(right));
}

export function useTaxProfile(clientId?: number | null) {
  const [profile, setProfile] = useState<TaxProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const validateProfile = useCallback((formValues: TaxProfile): TaxProfileValidationResult => {
    const errors: TaxProfileValidationErrors = {};

    if (!formValues.financial_year?.trim()) {
      errors.financial_year = "Financial year is required.";
    }

    const hasIncomeSources = [
      formValues.salary_income,
      formValues.business_income,
      formValues.house_property,
      formValues.capital_gain,
      formValues.other_sources,
      formValues.foreign_assets,
    ].some(Boolean);

    if (!hasIncomeSources) {
      errors.income_sources = "Select at least one income source.";
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
      isSaveEligible: Object.keys(errors).length === 0,
    };
  }, []);

  const loadProfile = useCallback(async () => {
    if (!clientId) {
      setProfile(null);
      setLoading(false);
      setError(null);
      setSuccessMessage(null);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setSuccessMessage(null);

      const data = await getTaxProfile(clientId);
      setProfile(data ?? null);
    } catch (err) {
      console.error(err);
      setError("Failed to load tax profile.");
    } finally {
      setLoading(false);
    }
  }, [clientId]);

  useEffect(() => {
    void loadProfile();
  }, [loadProfile]);

  const saveProfile = useCallback(async (formValues: TaxProfile) => {
    if (!clientId) {
      setError("Please select a client before saving the tax profile.");
      return null;
    }

    const validation = validateProfile(formValues);

    if (!validation.isValid) {
      setError("Please complete the required fields before saving.");
      return null;
    }

    const baselineProfile = profile ?? createDefaultProfile(clientId);

    if (profilesMatch(formValues, baselineProfile)) {
      setSuccessMessage("No changes to save.");
      return baselineProfile;
    }

    try {
      setSaving(true);
      setError(null);
      setSuccessMessage(null);

      if (profile?.id) {
        const updated = await updateTaxProfile(profile.id, buildPayload(formValues, clientId));
        setProfile(updated);
        setSuccessMessage("Tax profile updated successfully.");
        return updated;
      }

      const created = await createTaxProfile(buildPayload(formValues, clientId));
      setProfile(created);
      setSuccessMessage("Tax profile created successfully.");
      return created;
    } catch (err) {
      console.error(err);
      setError("Unable to save the tax profile right now. Please try again.");
      throw err;
    } finally {
      setSaving(false);
    }
  }, [clientId, profile, validateProfile]);

  return {
    profile,
    loading,
    saving,
    error,
    successMessage,
    saveProfile,
    validateProfile,
  };
}

