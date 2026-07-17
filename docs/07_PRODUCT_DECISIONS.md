# 07_PRODUCT_DECISIONS.md

**Version:** 1.0  
**Status:** Draft (Pending Approval)

---

# 1. Purpose

## Objective

This document records all significant business and technical decisions made during the design and development of TaxVault.

It serves as the single source of truth for architectural intent, ensuring future enhancements remain aligned with the original product vision.

---

# 2. Business Decisions

| ID | Decision | Rationale |
|----|----------|-----------|
| PD-001 | PAN is the primary client identifier. | Ensures unique client identification and prevents duplicate client records. |
| PD-002 | Every client shall have exactly one Digital Vault. | Provides a single repository for all client documents. |
| PD-003 | TaxVault workflow ends at **Ready for ITR**. | TaxVault is a document collection platform, not a tax filing application. |
| PD-004 | Document submission shall be channel agnostic. | Business processing remains independent of the submission source. |
| PD-005 | Every client shall maintain a Client Tax Profile. | Enables personalized document requirements. |
| PD-006 | Required Document Checklists shall be generated from the Client Tax Profile. | Automates document collection based on client attributes. |
| PD-007 | Checklists shall contain Standard, Conditional, and Additional documents. | Supports both common and client-specific requirements. |
| PD-008 | Conditional documents shall be generated using business rules. | Allows dynamic checklist generation without manual intervention. |
| PD-009 | TaxVault is a Client Document Collection & Tracking Platform. | Defines the product boundary and market positioning. |
| PD-010 | Bulk Excel Import is the primary client onboarding method. | Optimizes onboarding for CA firms managing large client volumes. |
| PD-011 | Manual client creation shall support Name, PAN, Mobile Number, and Email only. | Encourages fast onboarding while capturing essential information. |
| PD-012 | Every received document shall belong to only one client. | Maintains data integrity and prevents duplicate ownership. |
| PD-013 | Ready for ITR shall be achieved only after all mandatory documents are received. | Ensures collection completeness before handoff. |

---

# 3. Technical Decisions

| ID | Decision | Rationale |
|----|----------|-----------|
| TD-001 | FastAPI shall be the backend framework. | High performance, modern Python framework with native API support. |
| TD-002 | React with TypeScript shall be used for the frontend. | Strong typing, maintainability, and scalable UI development. |
| TD-003 | PostgreSQL shall be the primary relational database. | Reliable, scalable, and production-proven database platform. |
| TD-004 | REST APIs shall be used for all client-server communication. | Standardized and widely supported integration model. |
| TD-005 | JWT shall be used for authentication and authorization. | Stateless, secure authentication mechanism. |
| TD-006 | Application architecture shall follow a layered design. | Promotes separation of concerns and maintainability. |
| TD-007 | Business logic shall reside in the Service layer. | Keeps APIs and data access layers lightweight and reusable. |
| TD-008 | One Digital Vault shall exist for every client. | Aligns technical implementation with the business model. |
| TD-009 | Local file storage shall be used for MVP1. | Simplifies deployment while allowing future expansion. |
| TD-010 | Cloud object storage shall be supported in future releases. | Enables scalable storage without redesigning the application. |
| TD-011 | Database schema changes shall be managed using Alembic migrations. | Ensures controlled and repeatable database evolution. |
| TD-012 | APIs shall use versioned endpoints (/api/v1). | Supports backward compatibility for future releases. |

---

# 4. Future Considerations

The following capabilities are intentionally excluded from MVP1 and may be considered in future releases:

- OCR-based data extraction
- AI-powered document classification
- Client self-service portal
- Email, SMS, and WhatsApp integrations
- Cloud object storage
- Multi-tenant architecture
- Mobile application
- E-Signatures
- Payment management
- Tax filing integration
- AI-assisted document validation
- Workflow automation

---

# 5. Decision Governance

### Decision Principles

- Every significant architectural or business decision shall be documented.
- Existing decisions shall not be modified without formal review.
- New decisions shall receive the next available Decision ID.
- Business Decisions shall use the **PD** prefix.
- Technical Decisions shall use the **TD** prefix.
- Decisions superseding previous entries shall reference the original Decision ID.

---

## End of Document