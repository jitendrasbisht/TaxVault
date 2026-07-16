from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from app.api.dependencies import get_current_user
from app.core.security import create_access_token, decode_token
from app.db.dependencies import get_db
from app.schemas.user import (
    UserCreate,
    UserResponse,
    Token,
)
from app.services.auth_service import AuthService

router = APIRouter(prefix="/auth", tags=["Authentication"])


@router.post("/register", response_model=UserResponse)
def register(payload: UserCreate, db: Session = Depends(get_db)):
    return AuthService.register(db, payload)


@router.post("/login", response_model=Token)
def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db),
):
    token = AuthService.authenticate(
        db,
        form_data.username,
        form_data.password,
    )

    if not token:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    return token


@router.post("/refresh", response_model=Token)
def refresh(refresh_token: str):
    payload = decode_token(refresh_token)

    if payload.get("type") != "refresh":
        raise HTTPException(status_code=401, detail="Invalid refresh token")

    return {
        "access_token": create_access_token(payload["sub"]),
        "refresh_token": refresh_token,
        "token_type": "bearer",
    }


@router.get("/me", response_model=UserResponse)
def me(current=Depends(get_current_user)):
    return current
