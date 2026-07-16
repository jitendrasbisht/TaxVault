from datetime import datetime

from pydantic import BaseModel, ConfigDict, EmailStr


class ClientBase(BaseModel):
    name: str
    email: EmailStr | None = None
    phone: str | None = None
    gst_number: str | None = None
    pan_number: str | None = None
    address: str | None = None
    city: str | None = None
    state: str | None = None
    country: str = "India"
    postal_code: str | None = None
    is_active: bool = True


class ClientCreate(ClientBase):
    client_code: str


class ClientUpdate(BaseModel):
    name: str | None = None
    email: EmailStr | None = None
    phone: str | None = None
    gst_number: str | None = None
    pan_number: str | None = None
    address: str | None = None
    city: str | None = None
    state: str | None = None
    country: str | None = None
    postal_code: str | None = None
    is_active: bool | None = None


class ClientResponse(ClientBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    client_code: str
    created_at: datetime
    updated_at: datetime
