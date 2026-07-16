from datetime import datetime

from pydantic import BaseModel, ConfigDict


class CaseBase(BaseModel):
    client_id: int
    title: str
    description: str | None = None
    status: str = "Open"
    priority: str = "Medium"


class CaseCreate(CaseBase):
    case_number: str


class CaseUpdate(BaseModel):
    title: str | None = None
    description: str | None = None
    status: str | None = None
    priority: str | None = None


class CaseResponse(CaseBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    case_number: str
    created_at: datetime
    updated_at: datetime
