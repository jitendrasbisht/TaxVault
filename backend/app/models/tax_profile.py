from sqlalchemy import Boolean, ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base import Base


class TaxProfile(Base):
    __tablename__ = "tax_profiles"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)

    client_id: Mapped[int] = mapped_column(
        ForeignKey("clients.id", ondelete="CASCADE"),
        unique=True,
        nullable=False,
    )

    salary_income: Mapped[bool] = mapped_column(Boolean, default=False)
    business_income: Mapped[bool] = mapped_column(Boolean, default=False)
    house_property: Mapped[bool] = mapped_column(Boolean, default=False)
    capital_gain: Mapped[bool] = mapped_column(Boolean, default=False)
    other_sources: Mapped[bool] = mapped_column(Boolean, default=False)
    foreign_assets: Mapped[bool] = mapped_column(Boolean, default=False)

    regime: Mapped[str] = mapped_column(String(20), default="NEW")
    financial_year: Mapped[str] = mapped_column(String(10), default="2026-27")

    client = relationship("Client", back_populates="tax_profile")
