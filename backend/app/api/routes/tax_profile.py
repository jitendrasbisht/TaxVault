from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session

from app.db.dependencies import get_db
from app.schemas.tax_profile import (
    TaxProfileCreate,
    TaxProfileUpdate,
)
from app.services.tax_profile_service import *

router=APIRouter(
    prefix="/tax-profiles",
    tags=["Tax Profiles"],
)

@router.post("")
def create(data:TaxProfileCreate,db:Session=Depends(get_db)):
    return create_tax_profile(db,data)

@router.get("/{client_id}")
def get(client_id:int,db:Session=Depends(get_db)):
    return get_tax_profile(db,client_id)

@router.put("/{id}")
def update(id:int,data:TaxProfileUpdate,db:Session=Depends(get_db)):
    return update_tax_profile(db,id,data.model_dump())

@router.delete("/{id}")
def delete(
    id:int,
    db:Session=Depends(get_db)
):
    return delete_tax_profile(db,id)

