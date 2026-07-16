from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.api.dependencies import get_current_user
from app.db.dependencies import get_db
from app.schemas.document import (
    DocumentCreate,
    DocumentResponse,
    DocumentUpdate,
)
from app.services.document_service import DocumentService

router = APIRouter(
    prefix="/documents",
    tags=["Documents"],
)


@router.post("", response_model=DocumentResponse, status_code=status.HTTP_201_CREATED)
def create_document(
    payload: DocumentCreate,
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    return DocumentService.create(db, payload)


@router.get("", response_model=list[DocumentResponse])
def get_documents(
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    return DocumentService.get_all(db)


@router.get("/{document_id}", response_model=DocumentResponse)
def get_document(
    document_id: int,
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    document = DocumentService.get_by_id(db, document_id)

    if document is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Document not found",
        )

    return document


@router.put("/{document_id}", response_model=DocumentResponse)
def update_document(
    document_id: int,
    payload: DocumentUpdate,
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    document = DocumentService.get_by_id(db, document_id)

    if document is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Document not found",
        )

    return DocumentService.update(db, document, payload)


@router.delete("/{document_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_document(
    document_id: int,
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    document = DocumentService.get_by_id(db, document_id)

    if document is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Document not found",
        )

    DocumentService.delete(db, document)
