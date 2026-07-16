from datetime import datetime

from sqlalchemy import Date, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base import Base


class Compliance(Base):
    __tablename__ = "compliance"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)

    client_id: Mapped[int] = mapped_column(
        ForeignKey("clients.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )

    compliance_type: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    due_date: Mapped[Date] = mapped_column(
        Date,
        nullable=False,
    )

    status: Mapped[str] = mapped_column(
        String(30),
        default="Pending",
        nullable=False,
    )

    remarks: Mapped[str | None] = mapped_column(
        String(500),
        nullable=True,
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
    )

    updated_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False,
    )

    client: Mapped["Client"] = relationship(
        "Client",
        back_populates="compliances",
    )
