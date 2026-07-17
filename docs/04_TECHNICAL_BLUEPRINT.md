# 04_TECHNICAL_BLUEPRINT.md

**Version:** 1.0  
**Status:** Draft (Pending Approval)

---

# 1. Purpose

## Objective

This document defines the technical architecture of TaxVault.

It serves as the implementation blueprint for developers, solution architects, and future contributors by describing the overall system design, technology choices, architectural principles, and technical decisions.

This document complements the business documents and focuses solely on technical implementation.

---

# 2. Solution Architecture

## System Overview

TaxVault follows a modern three-tier architecture.

```text
                 React Frontend
                        │
                 REST API (/api/v1)
                        │
                 FastAPI Backend
                        │
        Business Services & Processing
                        │
                 PostgreSQL Database
                        │
              Document File Storage
```

## Technology Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- TanStack Query
- Axios

### Backend

- FastAPI
- SQLAlchemy
- Alembic
- Pydantic
- JWT Authentication

### Database

- PostgreSQL

### Storage

- Local File Storage (MVP)
- Cloud Storage Ready (Future)

---

# 3. Application Architecture

TaxVault follows a layered architecture to ensure separation of concerns and maintainability.

## Frontend Structure

```text
Pages
│
Components
│
Layouts
│
Hooks
│
Services
│
Types
```

## Backend Structure

```text
Routers
│
Services
│
Repositories
│
Models
│
Schemas
│
Core
│
Utilities
```

### Architectural Principles

- Clear separation of presentation and business logic.
- Business rules reside in the Service layer.
- Database access is isolated within the Repository layer.
- APIs remain stateless.
- All external communication occurs through versioned REST APIs.

---

# 4. Data Architecture

## Core Entities

- Users
- Clients
- Client Tax Profiles
- Collection Campaigns
- Digital Vaults
- Documents
- Document Checklists
- Activities

## Data Relationships

- One Client has one Digital Vault.
- One Client can participate in multiple Collection Campaigns.
- One Client can own multiple Documents.
- Documents update Checklist status.
- Activities maintain the audit history.

## Storage Strategy

### Structured Data

Stored in PostgreSQL.

Examples:

- Client information
- Metadata
- Checklist status
- Activities
- Configuration

### Document Files

Stored separately from the database.

```text
documents/
    PAN/
        Assessment Year/
            Document.pdf
```

Only document metadata is maintained in PostgreSQL.

---

# 5. Security Architecture

## Authentication

- JWT Access Tokens
- Refresh Token support
- Password hashing
- Secure session management

## Authorization

Role-Based Access Control (RBAC)

Supported roles include:

- Administrator
- Chartered Accountant
- Staff
- Client

## Security Standards

- Input validation
- File validation
- SQL Injection prevention
- Cross-site scripting (XSS) protection
- Secure password storage
- Protected API endpoints

## Audit Logging

Every significant business action shall be recorded, including:

- User
- Action
- Timestamp
- Previous Value
- New Value

---

# 6. Document Processing Architecture

Every received document follows a standardized processing pipeline.

```text
Document Received
        │
File Validation
        │
OCR Processing
        │
Smart Client Identification
        │
Document Classification
        │
Metadata Extraction
        │
Digital Vault Storage
        │
Checklist Update
        │
Activity Logging
```

## Client Identification Priority

1. PAN
2. Aadhaar
3. GST
4. Other Unique Identifiers
5. Client Name

Processing outcomes:

- Automatic Assignment
- Review Queue
- Unidentified Documents

---

# 7. API Standards

## API Design

- RESTful APIs
- Versioned endpoints
- JSON request and response format
- Stateless communication

Base URL

```text
/api/v1
```

## API Principles

- Consistent naming conventions
- Standard HTTP status codes
- Pagination support
- Filtering support
- Request validation
- Structured error responses

## Error Handling

Standardized responses shall be returned for:

- Validation errors
- Authentication failures
- Authorization failures
- Resource not found
- Business rule violations
- Internal server errors

---

# 8. Deployment Architecture

The application is designed for modular deployment.

```text
React Frontend
        │
      Nginx
        │
FastAPI Backend
        │
PostgreSQL
        │
Document Storage
```

### Deployment Principles

- Independent frontend and backend deployment.
- Environment-based configuration.
- Database migrations using Alembic.
- Scalable application architecture.
- Cloud-ready infrastructure.

---

# 9. Technical Decisions

| ID | Decision |
|----|----------|
| TD-001 | REST APIs shall be used for all client-server communication. |
| TD-002 | FastAPI shall serve as the backend framework. |
| TD-003 | React with TypeScript shall be used for the frontend. |
| TD-004 | PostgreSQL shall be the primary relational database. |
| TD-005 | JWT shall be used for authentication and authorization. |
| TD-006 | One Digital Vault shall exist for every client. |
| TD-007 | PAN shall be the primary client identifier. |
| TD-008 | Document processing shall remain channel agnostic. |
| TD-009 | Local file storage shall be used for the MVP. |
| TD-010 | The architecture shall support future migration to cloud object storage without major application changes. |

---

## End of Document