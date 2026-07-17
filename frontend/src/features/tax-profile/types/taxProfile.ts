export interface TaxProfile {
  id: number;
  client_id: number;

  salary_income: boolean;
  business_income: boolean;
  house_property: boolean;
  capital_gain: boolean;
  other_sources: boolean;
  foreign_assets: boolean;

  regime: string;
  financial_year: string;
}
