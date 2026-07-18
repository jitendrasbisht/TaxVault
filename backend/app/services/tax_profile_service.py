from sqlalchemy.orm import Session

from app.models.tax_profile import TaxProfile
from app.schemas.tax_profile import TaxProfileCreate


def create_tax_profile(db: Session, data: TaxProfileCreate):
    profile = TaxProfile(**data.model_dump())
    db.add(profile)
    db.commit()
    db.refresh(profile)
    return profile


def get_tax_profile(db: Session, client_id: int):
    return (
        db.query(TaxProfile)
        .filter(TaxProfile.client_id == client_id)
        .first()
    )
from sqlalchemy.orm import Session
from app.models.tax_profile import TaxProfile

def update_tax_profile(db:Session,id:int,data:dict):

    profile=db.query(TaxProfile).filter(TaxProfile.id==id).first()

    for k,v in data.items():
        setattr(profile,k,v)

    db.commit()
    db.refresh(profile)

    return profile

def delete_tax_profile(db,id):

    profile=db.get(TaxProfile,id)

    db.delete(profile)

    db.commit()

    return {"message":"Tax Profile deleted"}

