from pydantic import BaseModel, ConfigDict

class TaxProfileBase(BaseModel):
    salary_income: bool=False
    business_income: bool=False
    house_property: bool=False
    capital_gain: bool=False
    other_sources: bool=False
    foreign_assets: bool=False
    regime:str="NEW"
    financial_year:str="2026-27"

class TaxProfileCreate(TaxProfileBase):
    client_id:int

class TaxProfileUpdate(TaxProfileBase):
    pass

class TaxProfileResponse(TaxProfileBase):
    id:int
    client_id:int

    model_config=ConfigDict(from_attributes=True)
