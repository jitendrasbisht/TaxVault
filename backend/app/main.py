from fastapi import FastAPI

from app.api.auth import router as auth_router
from app.api.v1.endpoints.health import router as health_router
from app.api.v1.endpoints.clients import router as client_router
from app.api.v1.endpoints.cases import router as case_router
from app.api.v1.endpoints.compliance import router as compliance_router
from app.api.v1.endpoints.documents import router as document_router
from app.api.v1.endpoints.dashboard import router as dashboard_router
from app.core.config import settings

app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
)

app.include_router(health_router)
app.include_router(auth_router)
app.include_router(client_router)
app.include_router(case_router)
app.include_router(compliance_router)
app.include_router(document_router)
app.include_router(dashboard_router)
