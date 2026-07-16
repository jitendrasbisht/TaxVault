from fastapi import FastAPI

from app.core.config import settings
from app.api.v1.endpoints.health import router as health_router
from app.api.auth import router as auth_router
from app.api.v1.endpoints.clients import router as client_router

app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
)

app.include_router(health_router)
app.include_router(auth_router)
app.include_router(client_router)
