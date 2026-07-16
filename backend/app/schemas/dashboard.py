from pydantic import BaseModel


class DashboardSummary(BaseModel):
    clients: int
    cases: int
    compliance: int
    documents: int
