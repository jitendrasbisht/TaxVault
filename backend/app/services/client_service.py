from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session
from fastapi import HTTPException, status

from app.models.client import Client
from app.schemas.client import ClientCreate, ClientUpdate


class ClientService:

    @staticmethod
    def create(db: Session, payload: ClientCreate) -> Client:
        client = Client(**payload.model_dump())
        db.add(client)

        try:
            db.commit()
            db.refresh(client)
            return client
        except IntegrityError:
            db.rollback()
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="Client with the same Client Code, GST Number or PAN Number already exists.",
            )

    @staticmethod
    def get_all(db: Session) -> list[Client]:
        return list(db.scalars(select(Client)).all())

    @staticmethod
    def get_by_id(db: Session, client_id: int) -> Client | None:
        return db.get(Client, client_id)

    @staticmethod
    def update(
        db: Session,
        client: Client,
        payload: ClientUpdate,
    ) -> Client:
        for field, value in payload.model_dump(exclude_unset=True).items():
            setattr(client, field, value)

        try:
            db.commit()
            db.refresh(client)
            return client
        except IntegrityError:
            db.rollback()
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="Client with the same Client Code, GST Number or PAN Number already exists.",
            )

    @staticmethod
    def delete(
        db: Session,
        client: Client,
    ) -> None:
        db.delete(client)
        db.commit()
