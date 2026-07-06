from fastapi import FastAPI
from app.api.v1.endpoints import health

app = FastAPI(title="TaxVault API")

app.include_router(
    health.router,
    prefix="/api/v1",
    tags=["Health"]
)

@app.get("/")
def home():
    return {"message": "Welcome to TaxVault API"}