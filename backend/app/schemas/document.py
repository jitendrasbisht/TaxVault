from datetime import datetime

from pydantic import BaseModel, ConfigDict


class DocumentBase(BaseModel):
    client_id: int
    case_id: int | None = None
    file_name: str
    file_type: str
    file_size: int
    storage_path: str


class DocumentCreate(DocumentBase):
    pass


class DocumentUpdate(BaseModel):
    file_name: str | None = None
    file_type: str | None = None
    storage_path: str | None = None


class DocumentResponse(DocumentBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    created_at: datetime
    updated_at: datetime
