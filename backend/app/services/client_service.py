from app.models.client import Client
from app.services.base_service import BaseService


class ClientService(BaseService):
    model = Client
