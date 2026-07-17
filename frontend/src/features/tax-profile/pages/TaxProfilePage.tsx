import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
    TaxProfileActions,
    TaxProfileForm,
    TaxProfileProgress,
    TaxProfileSummary,
} from "../components";
import { useTaxProfile } from "../hooks/useTaxProfile";
import { TaxProfile } from "../types/taxProfile";

function createInitialProfile(clientId: number): TaxProfile {
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

export default function TaxProfilePage() {
    const { id } = useParams();
    const selectedClientId = id ? Number(id) : undefined;
    const isClientSelected = typeof selectedClientId === "number" && !Number.isNaN(selectedClientId);

    const { profile, loading, saving, error, successMessage, saveProfile, validateProfile } = useTaxProfile(isClientSelected ? selectedClientId : undefined);
    const [formValues, setFormValues] = useState<TaxProfile>(() => createInitialProfile(isClientSelected ? selectedClientId! : 0));

    useEffect(() => {
        if (profile) {
            setFormValues(profile);
            return;
        }

        setFormValues(createInitialProfile(isClientSelected ? selectedClientId! : 0));
    }, [isClientSelected, profile, selectedClientId]);

    const completed = [
        formValues.salary_income,
        formValues.business_income,
        formValues.house_property,
        formValues.capital_gain,
        formValues.other_sources,
        formValues.foreign_assets,
    ].filter(Boolean).length;

    const total = 6;
    const percentage = Math.round((completed / total) * 100);
    const validation = validateProfile(formValues);

    const handleSave = async () => {
        await saveProfile(formValues);
    };

    return (
        <div className="max-w-5xl mx-auto space-y-6 p-6">
            <h1 className="text-3xl font-bold">
                Client Tax Profile
            </h1>

            {!isClientSelected && (
                <div className="rounded border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
                    Select a client from Client Management to view or create a tax profile.
                </div>
            )}

            {loading && isClientSelected && (
                <div className="rounded border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-700">
                    Loading tax profile...
                </div>
            )}

            {error && (
                <div className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                </div>
            )}

            {successMessage && (
                <div className="rounded border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                    {successMessage}
                </div>
            )}

            <TaxProfileProgress
                completed={completed}
                total={total}
                percentage={percentage}
            />

            <TaxProfileSummary
                total={total}
                selected={completed}
                percentage={percentage}
            />

            <TaxProfileForm
                values={formValues}
                onChange={setFormValues}
                validation={validation}
            />

            <TaxProfileActions
                onSave={handleSave}
                saving={saving}
                disabled={loading || saving || !validation.isValid || !isClientSelected}
            />
        </div>
    );
}
