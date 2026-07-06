from fastapi import FastAPI
from app.api.v1.endpoints import health

from app.core.config import settings

app = FastAPI(
    title=settings.app_name,
    version=settings.app_version
)

app.include_router(
    health.router,
    prefix="/api/v1",
    tags=["Health"]
)

@app.get("/")
def home():
    return {"message": "Welcome to TaxVault API"}