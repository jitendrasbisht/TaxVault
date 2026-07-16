from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.api.dependencies import get_current_user
from app.db.dependencies import get_db
from app.schemas.case import (
    CaseCreate,
    CaseResponse,
    CaseUpdate,
)
from app.services.case_service import CaseService

router = APIRouter(
    prefix="/cases",
    tags=["Cases"],
)


@router.post("", response_model=CaseResponse, status_code=status.HTTP_201_CREATED)
def create_case(
    payload: CaseCreate,
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    return CaseService.create(db, payload)


@router.get("", response_model=list[CaseResponse])
def get_cases(
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    return CaseService.get_all(db)


@router.get("/{case_id}", response_model=CaseResponse)
def get_case(
    case_id: int,
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    case = CaseService.get_by_id(db, case_id)

    if case is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Case not found",
        )

    return case


@router.put("/{case_id}", response_model=CaseResponse)
def update_case(
    case_id: int,
    payload: CaseUpdate,
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    case = CaseService.get_by_id(db, case_id)

    if case is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Case not found",
        )

    return CaseService.update(db, case, payload)


@router.delete("/{case_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_case(
    case_id: int,
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    case = CaseService.get_by_id(db, case_id)

    if case is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Case not found",
        )

    CaseService.delete(db, case)
