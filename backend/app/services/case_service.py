from app.models.case import Case
from app.services.base_service import BaseService


class CaseService(BaseService):
    model = Case
