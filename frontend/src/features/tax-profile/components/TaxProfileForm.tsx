import { TaxProfile } from "../types/taxProfile";
import type { TaxProfileValidationResult } from "../hooks/useTaxProfile";

type Props = {
  values: TaxProfile;
  onChange: (values: TaxProfile) => void;
  validation: TaxProfileValidationResult;
};

export default function TaxProfileForm({ values, onChange, validation }: Props) {
  const handleBooleanChange = (key: keyof Pick<TaxProfile, "salary_income" | "business_income" | "house_property" | "capital_gain" | "other_sources" | "foreign_assets">) => {
    onChange({
      ...values,
      [key]: !values[key],
    });
  };

  const handleTextChange = (key: "regime" | "financial_year", value: string) => {
    onChange({
      ...values,
      [key]: value,
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="font-medium">Income Sources *</div>

        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={values.salary_income}
              onChange={() => handleBooleanChange("salary_income")}
            />
            salary income
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={values.business_income}
              onChange={() => handleBooleanChange("business_income")}
            />
            business income
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={values.house_property}
              onChange={() => handleBooleanChange("house_property")}
            />
            house property
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={values.capital_gain}
              onChange={() => handleBooleanChange("capital_gain")}
            />
            capital gain
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={values.other_sources}
              onChange={() => handleBooleanChange("other_sources")}
            />
            other sources
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={values.foreign_assets}
              onChange={() => handleBooleanChange("foreign_assets")}
            />
            foreign assets
          </label>
        </div>

        {validation.errors.income_sources && (
          <div className="text-sm text-red-600">{validation.errors.income_sources}</div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="block font-medium">Financial year *</label>
          <input
            className={`w-full rounded border p-2 ${validation.errors.financial_year ? "border-red-500" : "border-gray-300"}`}
            value={values.financial_year}
            onChange={(e) => handleTextChange("financial_year", e.target.value)}
          />
          {validation.errors.financial_year && (
            <div className="text-sm text-red-600">{validation.errors.financial_year}</div>
          )}
        </div>

        <div className="space-y-1">
          <label className="block font-medium">Regime</label>
          <select
            className="w-full rounded border border-gray-300 p-2"
            value={values.regime}
            onChange={(e) => handleTextChange("regime", e.target.value)}
          >
            <option>NEW</option>
            <option>OLD</option>
          </select>
        </div>
      </div>
    </div>
  );
}
