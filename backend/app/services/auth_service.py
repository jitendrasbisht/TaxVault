from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.user import User
from app.schemas.user import UserCreate
from app.core.security import (
    hash_password,
    verify_password,
    create_access_token,
    create_refresh_token,
)


class AuthService:

    @staticmethod
    def register(db: Session, payload: UserCreate):
        user = User(
            email=payload.email,
            full_name=payload.full_name,
            hashed_password=hash_password(payload.password),
        )
        db.add(user)
        db.commit()
        db.refresh(user)
        return user

    @staticmethod
    def authenticate(db: Session, email: str, password: str):
        user = db.scalar(select(User).where(User.email == email))

        if not user:
            return None

        if not verify_password(password, user.hashed_password):
            return None

        return {
            "access_token": create_access_token(user.email),
            "refresh_token": create_refresh_token(user.email),
            "token_type": "bearer",
        }
