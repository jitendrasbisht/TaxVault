from sqlalchemy import func
from sqlalchemy.orm import Session

from app.models.client import Client
from app.models.case import Case
from app.models.compliance import Compliance
from app.models.document import Document


class DashboardService:

    @staticmethod
    def summary(db: Session):
        return {
            "clients": db.query(func.count(Client.id)).scalar(),
            "cases": db.query(func.count(Case.id)).scalar(),
            "compliance": db.query(func.count(Compliance.id)).scalar(),
            "documents": db.query(func.count(Document.id)).scalar(),
        }
