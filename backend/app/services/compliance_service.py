from app.models.compliance import Compliance
from app.services.base_service import BaseService


class ComplianceService(BaseService):
    model = Compliance
