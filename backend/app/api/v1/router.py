from fastapi import APIRouter

from app.api.auth import router as auth_router
from app.api.v1.endpoints.health import router as health_router
from app.api.v1.endpoints.clients import router as client_router
from app.api.v1.endpoints.cases import router as case_router
from app.api.v1.endpoints.compliance import router as compliance_router
from app.api.v1.endpoints.documents import router as document_router
from app.api.v1.endpoints.dashboard import router as dashboard_router

api_router = APIRouter(prefix="/api/v1")

api_router.include_router(health_router)
api_router.include_router(auth_router)
api_router.include_router(client_router)
api_router.include_router(case_router)
api_router.include_router(compliance_router)
api_router.include_router(document_router)
api_router.include_router(dashboard_router)
