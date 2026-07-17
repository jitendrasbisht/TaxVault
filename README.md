\# TaxVault



> \*\*Current Version:\*\* MVP 1.0 (In Development)



A \*\*Client Document Collection \& Tracking Platform\*\* designed for Chartered Accountants and Tax Professionals to streamline client onboarding, document collection, digital vault management, and collection progress tracking.



\---



\# Overview



TaxVault simplifies the complete document collection lifecycle required for Income Tax Return (ITR) preparation.



The platform enables firms to:



\- Onboard clients

\- Generate personalized document checklists

\- Request and collect documents

\- Organize documents in a Digital Vault

\- Track collection progress

\- Identify when a client is \*\*Ready for ITR\*\*



\*\*TaxVault is not a tax filing application.\*\* Its responsibility ends when all mandatory documents have been collected, organized, and verified.



\---



\# Key Features



\- Secure JWT Authentication

\- Client Management

\- Client Tax Profiles

\- Digital Vault

\- Collection Campaign Management

\- Document Request Management

\- Smart Client Identification

\- Document Classification

\- Checklist Engine

\- Progress Tracking

\- Dashboard \& Reporting

\- Audit Logging



\---



\# Technology Stack



| Layer | Technology |

|--------|------------|

| Frontend | React 19 + TypeScript + Vite |

| Backend | FastAPI |

| Database | PostgreSQL |

| ORM | SQLAlchemy 2.0 |

| Database Migrations | Alembic |

| Authentication | JWT |

| Styling | Tailwind CSS |



\---



\# Project Structure



```text

TaxVault/

│

├── backend/

├── frontend/

├── database/

├── storage/

├── docs/

│   ├── governance/

│   │   ├── CHANGELOG.md

│   │   ├── ROADMAP.md

│   │   ├── RISK\_REGISTER.md

│   │   └── KNOWN\_ISSUES.md

│   │

│   ├── 01\_PROJECT\_VISION.md

│   ├── 02\_PRODUCT\_BLUEPRINT.md

│   ├── 03\_FUNCTIONAL\_REQUIREMENTS.md

│   ├── 04\_TECHNICAL\_BLUEPRINT.md

│   ├── 05\_MVP1\_EXECUTION\_PLAN.md

│   ├── 06\_MVP1\_RELEASE\_CHECKLIST.md

│   └── 07\_PRODUCT\_DECISIONS.md

│

├── README.md

└── .gitignore

```



\---



\# Prerequisites



Before running the project, ensure the following software is installed:



\- Python 3.12 or later

\- Node.js 24 or later

\- PostgreSQL

\- Git



\---



\# Backend Setup



```powershell

cd backend



python -m venv venv



.\\venv\\Scripts\\Activate.ps1



pip install -r requirements.txt



python -m alembic upgrade head



python -m uvicorn app.main:app --reload

```



\---



\# Frontend Setup



```powershell

cd frontend



npm install



npm run dev

```



\---



\# Environment Variables



Create a `.env` file inside the `backend` directory.



```env

DATABASE\_URL=



SECRET\_KEY=



ALGORITHM=



ACCESS\_TOKEN\_EXPIRE\_MINUTES=

```



\---



\# Running the Application



| Service | URL |

|----------|-----|

| Frontend | http://localhost:5173 |

| Backend API | http://127.0.0.1:8000 |

| Swagger API Documentation | http://127.0.0.1:8000/docs |



\---



\# Documentation



Comprehensive project documentation is available in the \*\*/docs\*\* directory.



\## Product Documentation



\- 01\_PROJECT\_VISION.md

\- 02\_PRODUCT\_BLUEPRINT.md

\- 03\_FUNCTIONAL\_REQUIREMENTS.md

\- 04\_TECHNICAL\_BLUEPRINT.md

\- 05\_MVP1\_EXECUTION\_PLAN.md

\- 06\_MVP1\_RELEASE\_CHECKLIST.md

\- 07\_PRODUCT\_DECISIONS.md



\## Project Governance



Located under:



```text

docs/governance/

```



\- CHANGELOG.md

\- ROADMAP.md

\- RISK\_REGISTER.md

\- KNOWN\_ISSUES.md



\---



\# Current Status



| Version | Status |

|----------|--------|

| MVP 1.0 | 🚧 In Development |



\---



\# Future Roadmap



Planned future enhancements include:



\- OCR-based document extraction

\- AI-powered document classification

\- Client Self-Service Portal

\- Cloud Object Storage

\- Mobile Application

\- Multi-Tenant Support

\- Email, SMS \& WhatsApp integrations

\- Tax Filing Integration



\---



\# Contributing



TaxVault is currently maintained as a private project.



Development follows the standards and architecture defined in the project documentation under the `docs` directory.



\---



\# License



This project is currently maintained as a private repository.



\*\*All rights reserved.\*\*

