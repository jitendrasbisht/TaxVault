from datetime import date, datetime

from pydantic import BaseModel, ConfigDict


class ComplianceBase(BaseModel):
    client_id: int
    compliance_type: str
    due_date: date
    status: str = "Pending"
    remarks: str | None = None


class ComplianceCreate(ComplianceBase):
    pass


class ComplianceUpdate(BaseModel):
    compliance_type: str | None = None
    due_date: date | None = None
    status: str | None = None
    remarks: str | None = None


class ComplianceResponse(ComplianceBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    created_at: datetime
    updated_at: datetime
