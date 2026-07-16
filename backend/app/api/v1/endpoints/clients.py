from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.api.dependencies import get_current_user
from app.db.dependencies import get_db
from app.schemas.client import (
    ClientCreate,
    ClientResponse,
    ClientUpdate,
)
from app.services.client_service import ClientService

router = APIRouter(
    prefix="/clients",
    tags=["Clients"],
)


@router.post("", response_model=ClientResponse, status_code=status.HTTP_201_CREATED)
def create_client(
    payload: ClientCreate,
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    return ClientService.create(db, payload)


@router.get("", response_model=list[ClientResponse])
def get_clients(
    db: Session =Depends(get_db),
    _=Depends(get_current_user),
):
    return ClientService.get_all(db)


@router.get("/{client_id}", response_model=ClientResponse)
def get_client(
    client_id: int,
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    client = ClientService.get_by_id(db, client_id)

    if client is None:
        raise HTTPException(
            status_code=404,
            detail="Client not found",
        )

    return client


@router.put("/{client_id}", response_model=ClientResponse)
def update_client(
    client_id: int,
    payload: ClientUpdate,
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    client = ClientService.get_by_id(db, client_id)

    if client is None:
        raise HTTPException(
            status_code=404,
            detail="Client not found",
        )

    return ClientService.update(db, client, payload)


@router.delete("/{client_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_client(
    client_id: int,
    db: Session = Depends(get_db),
    _=Depends(get_current_user),
):
    client = ClientService.get_by_id(db, client_id)

    if client is None:
        raise HTTPException(
            status_code=404,
            detail="Client not found",
        )

    ClientService.delete(db, client)
