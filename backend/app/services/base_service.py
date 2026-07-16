from sqlalchemy import select
from sqlalchemy.orm import Session


class BaseService:

    model = None

    @classmethod
    def get_all(cls, db: Session):
        return list(db.scalars(select(cls.model)).all())

    @classmethod
    def get_by_id(cls, db: Session, entity_id: int):
        return db.get(cls.model, entity_id)

    @classmethod
    def create(cls, db: Session, payload):
        entity = cls.model(**payload.model_dump())
        db.add(entity)
        db.commit()
        db.refresh(entity)
        return entity

    @classmethod
    def update(cls, db: Session, entity, payload):
        for field, value in payload.model_dump(exclude_unset=True).items():
            setattr(entity, field, value)

        db.commit()
        db.refresh(entity)
        return entity

    @classmethod
    def delete(cls, db: Session, entity):
        db.delete(entity)
        db.commit()
