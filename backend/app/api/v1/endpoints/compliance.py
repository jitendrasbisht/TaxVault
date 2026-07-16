from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.api.dependencies import get_current_user
from app.db.dependencies import get_db
from app.schemas.compliance import (
    ComplianceCreate,
    ComplianceResponse,
    ComplianceUpdate,
)
from app.services.compliance_service import ComplianceService

router = APIRouter(
    prefix="/compliance",
    tags=["Compliance"],
)


@router.post("", response_model=ComplianceResponse, status_code=status.HTTP_201_CREATED)
def create_compliance(
    payload: ComplianceCreate,
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    return ComplianceService.create(db, payload)


@router.get("", response_model=list[ComplianceResponse])
def get_compliances(
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    return ComplianceService.get_all(db)


@router.get("/{compliance_id}", response_model=ComplianceResponse)
def get_compliance(
    compliance_id: int,
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    compliance = ComplianceService.get_by_id(db, compliance_id)

    if compliance is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Compliance not found",
        )

    return compliance


@router.put("/{compliance_id}", response_model=ComplianceResponse)
def update_compliance(
    compliance_id: int,
    payload: ComplianceUpdate,
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    compliance = ComplianceService.get_by_id(db, compliance_id)

    if compliance is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Compliance not found",
        )

    return ComplianceService.update(db, compliance, payload)


@router.delete("/{compliance_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_compliance(
    compliance_id: int,
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    compliance = ComplianceService.get_by_id(db, compliance_id)

    if compliance is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Compliance not found",
        )

    ComplianceService.delete(db, compliance)
