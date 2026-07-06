from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {
        "application": "TaxVault",
        "version": "0.1",
        "status": "Running Successfully"
    }
    