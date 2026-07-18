from __future__ import annotations

from datetime import datetime

from sqlalchemy import Boolean, DateTime, Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base import Base


class Client(Base):
    __tablename__ = "clients"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    client_code: Mapped[str] = mapped_column(
        String(20),
        unique=True,
        nullable=False,
        index=True,
    )
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    email: Mapped[str | None] = mapped_column(String(255))
    phone: Mapped[str | None] = mapped_column(String(20))
    gst_number: Mapped[str | None] = mapped_column(
        String(20),
        unique=True,
    )
    pan_number: Mapped[str | None] = mapped_column(
        String(20),
        unique=True,
    )
    address: Mapped[str | None] = mapped_column(String(500))
    city: Mapped[str | None] = mapped_column(String(100))
    state: Mapped[str | None] = mapped_column(String(100))
    country: Mapped[str] = mapped_column(
        String(100),
        default="India",
    )
    postal_code: Mapped[str | None] = mapped_column(String(20))
    is_active: Mapped[bool] = mapped_column(
        Boolean,
        default=True,
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
    )

    cases: Mapped[list["Case"]] = relationship(
        "Case",
        back_populates="client",
        cascade="all, delete-orphan",
    )

    compliances: Mapped[list["Compliance"]] = relationship(
        "Compliance",
        back_populates="client",
        cascade="all, delete-orphan",
    )

    tax_profile: Mapped["TaxProfile | None"] = relationship(
        "TaxProfile",
        back_populates="client",
        uselist=False,
        cascade="all, delete-orphan",
    )