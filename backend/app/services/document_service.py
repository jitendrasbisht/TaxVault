from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.models.document import Document
from app.schemas.document import (
    DocumentCreate,
    DocumentUpdate,
)


class DocumentService:

    @staticmethod
    def create(db: Session, payload: DocumentCreate) -> Document:
        document = Document(**payload.model_dump())
        db.add(document)

        try:
            db.commit()
            db.refresh(document)
            return document
        except IntegrityError:
            db.rollback()
            raise ValueError("Document already exists.")

    @staticmethod
    def get_all(db: Session) -> list[Document]:
        return list(db.scalars(select(Document)).all())

    @staticmethod
    def get_by_id(db: Session, document_id: int) -> Document | None:
        return db.get(Document, document_id)

    @staticmethod
    def update(
        db: Session,
        document: Document,
        payload: DocumentUpdate,
    ) -> Document:
        for field, value in payload.model_dump(exclude_unset=True).items():
            setattr(document, field, value)

        db.commit()
        db.refresh(document)
        return document

    @staticmethod
    def delete(
        db: Session,
        document: Document,
    ) -> None:
        db.delete(document)
        db.commit()
