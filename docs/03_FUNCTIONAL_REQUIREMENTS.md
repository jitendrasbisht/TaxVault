# 03_FUNCTIONAL_REQUIREMENTS.md

**Version:** 1.0
**Status:** Draft (Pending Approval)

---

# 1. Purpose

## Objective

This document defines the functional behaviour of TaxVault.

It describes the business capabilities of the system and the expected behaviour of each capability.

Technical implementation details are documented separately in the Technical Blueprint.

---

# 2. Functional Requirements

## FR-001 Client Management

### Objective

Manage the complete lifecycle of clients within TaxVault.

### Functional Behaviour

- Import clients using Excel.
- Create clients manually.
- Validate mandatory information.
- Prevent duplicate PAN records.
- Create Digital Vault automatically.
- Search clients.
- View client profile.
- Manage client status (Active, Inactive, Archived).

### Output

A verified client repository ready for document collection.

---

## FR-002 Collection Campaign Management

### Objective

Initiate and manage document collection campaigns.

### Functional Behaviour

- Create collection campaigns.
- Select Assessment Year.
- Select one or more clients.
- Generate document requests.
- Generate client checklists.
- Track campaign status.
- Close completed campaigns.

### Output

Document collection process initiated for selected clients.

---

## FR-003 Document Submission

### Objective

Receive client documents irrespective of submission method.

### Functional Behaviour

- Accept supported file formats.
- Validate uploaded files.
- Reject invalid files.
- Capture upload source.
- Register document for processing.

### Output

Document enters the TaxVault processing workflow.

---

## FR-004 Smart Client Identification Engine

### Objective

Automatically identify the correct client.

### Functional Behaviour

Identification Priority

1. PAN
2. Aadhaar
3. GST
4. Other Unique Identifier
5. Client Name

System shall:

- Assign documents automatically when a unique match exists.
- Move documents to Review Queue when multiple matches exist.
- Move documents to Unidentified Documents when no match exists.
- Allow manual assignment.
- Maintain identification audit history.

### Output

Document linked to the correct client or routed for review.

---

## FR-005 Document Classification Engine

### Objective

Automatically classify received documents.

### Functional Behaviour

- Identify document type.
- Assign predefined category.
- Allow manual reclassification.
- Maintain document metadata.

Supported categories include:

- PAN Card
- Aadhaar
- Form 16
- AIS
- TIS
- Form 26AS
- Salary Slip
- Bank Statement
- Capital Gain Statement
- Home Loan Certificate
- Rental Documents
- GST Certificate

### Output

Document categorized for storage and checklist updates.

---

## FR-006 Digital Vault Management

### Objective

Maintain a secure document repository for every client.

### Functional Behaviour

- Create one Digital Vault per client.
- Store classified documents.
- Maintain document metadata.
- Support document search.
- Preview documents.
- Download documents.
- Replace documents.
- Soft delete documents.
- Maintain document history.

### Output

Centralized document repository for every client.

---

## FR-007 Checklist Engine

### Objective

Track completeness of required documents.

### Functional Behaviour

- Generate standard checklist.
- Generate conditional checklist.
- Support additional document requests.
- Update checklist automatically after document classification.
- Track document status.
- Calculate checklist completion.

### Output

Real-time document collection status.

---

## FR-008 Progress Tracking

### Objective

Measure collection progress for every client.

### Functional Behaviour

- Calculate completion percentage.
- Display pending documents.
- Display received documents.
- Determine Ready for ITR status.
- Highlight incomplete collections.

### Output

Real-time progress visibility.

---

## FR-009 Dashboard & Reporting

### Objective

Provide operational visibility.

### Functional Behaviour

Display:

- Total Clients
- Active Campaigns
- Documents Received
- Pending Documents
- Review Queue
- Unidentified Documents
- Ready for ITR Clients
- Collection Completion Percentage

Support filtering by:

- Assessment Year
- Campaign
- Client
- Collection Status

### Output

Operational dashboard for monitoring document collection.

---

## FR-010 Audit & Activity Tracking

### Objective

Maintain a complete audit trail.

### Functional Behaviour

Record:

- Client creation
- Client updates
- Document uploads
- Document classification
- Manual assignments
- Checklist updates
- Campaign activities
- User actions
- Date & Time
- Performed By

### Output

Complete activity history for compliance and traceability.

---

# 3. Business Rules

## BR-001

One PAN shall belong to only one client.

---

## BR-002

Every client shall have exactly one Digital Vault.

---

## BR-003

Every received document shall belong to only one client.

---

## BR-004

Documents shall not be permanently deleted through normal operations.

---

## BR-005

Documents with multiple client matches shall require manual review.

---

## BR-006

The document submission channel shall not affect business processing.

---

## BR-007

Ready for ITR shall be achieved only after all mandatory documents are received.

---

## BR-008

Every business action performed within the application shall be auditable.

---

## End of Document