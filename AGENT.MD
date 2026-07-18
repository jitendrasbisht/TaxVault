\# AGENTS.md



\# TaxVault AI Development Guide



\## Project Overview



TaxVault is a modern Tax Management Platform built for Chartered Accountants and Tax Consultants.



The application manages:



\- Client Management

\- Client Tax Profiles

\- Document Vault

\- Compliance Management

\- Reports \& Dashboards

\- Authentication

\- Case Management



\---



\# Technology Stack



\## Backend



\- FastAPI

\- PostgreSQL

\- SQLAlchemy 2.0

\- Alembic

\- Pydantic v2

\- JWT Authentication



\## Frontend



\- React 19

\- TypeScript

\- Vite

\- Tailwind CSS v4

\- React Router

\- React Hook Form

\- Zod



\---



\# AI Working Rules



Before making any code changes:



1\. Inspect the existing implementation.

2\. Understand the current architecture.

3\. Reuse existing code wherever possible.

4\. Extend functionality instead of duplicating it.

5\. Keep changes focused on the requested feature.



Never rewrite or refactor unrelated code unless explicitly requested.



\---



\# Project Architecture



\## Backend



Route

→ Service

→ Schema

→ Model

→ Database



Business logic belongs in the Service layer.



Routes should remain thin.



Never access the database directly from routes.



\---



\## Frontend



Page

→ Components

→ Hooks

→ Services

→ API



Keep business logic inside hooks/services.



Keep components focused on rendering.



\---



\# Coding Standards



Follow the existing project structure.



Reuse existing:



\- Components

\- Hooks

\- Services

\- Utilities

\- Types

\- Models

\- Schemas



Avoid duplicate implementations.



Keep naming conventions consistent.



Prefer small, incremental changes.



\---



\# File Changes



Before creating a new file:



\- Check whether a similar file already exists.

\- Extend existing functionality whenever appropriate.



Do not rename or move files unless requested.



\---



\# UI Guidelines



Maintain the existing UI design.



Reuse shared UI components whenever possible.



Avoid introducing new design patterns unless requested.



\---



\# Backend Guidelines



Use:



\- SQLAlchemy ORM

\- Pydantic Schemas

\- Service Layer

\- Dependency Injection



Keep validation inside schemas or services.



\---



\# Frontend Guidelines



Use:



\- TypeScript

\- Functional Components

\- Existing Hooks

\- Existing Services



Avoid placing business logic directly inside pages or components.



\---



\# Quality Checklist



Before completing a task, verify:



\- Imports are correct.

\- Exports are correct.

\- TypeScript types are valid.

\- Routing is not broken.

\- Existing functionality remains intact.



\---



\# Development Workflow



Inspect first.



Plan second.



Implement third.



Verify fourth.



\---



\# Documentation



Project documentation is located in the `/docs` folder.



Read `08\_PROJECT\_CONTEXT.md` when project-specific context is needed.



\---



\# Scope



Only implement what has been requested.



Avoid feature creep.



Do not make assumptions about future requirements.



\---



\# Communication



When responding:



\- Briefly summarize the implementation plan.

\- Mention the files that will be modified.

\- Keep explanations concise.

\- If requirements are unclear, ask before implementing.





\---



\# TaxVault Principle



Prefer consistency over cleverness.



Favor maintainable, readable, and predictable code over complex or highly optimized solutions.



Every change should integrate naturally with the existing codebase.


## Response Rules (Mandatory)

- Be concise.
- Do not explain your reasoning unless asked.
- Do not repeat my prompt.
- Do not summarize files you read.
- Use bullet points instead of paragraphs.
- Keep responses under 250 words unless I ask for details.
- Do not speculate. Verify first.
- If auditing, report only verified facts.
- If planning, provide only the requested sections.
- If implementing, modify only approved files.
- End every response with either:
  - "Waiting for approval."
  - "Implementation complete."

## Environment Rules (Mandatory)

- Backend commands MUST always run inside the activated backend virtual environment (.venv).
- Never execute Python commands using the system Python.
- Frontend commands must run from the frontend folder using npm.
- Before running backend verification commands, ensure the virtual environment is activated.

## Terminal Rules (Mandatory)

- Frontend APP terminal is always running.
- Backend APP terminal is always running.
- Never run npm run dev if the frontend server is already running.
- Never run uvicorn if the backend server is already running.
- Use the existing running servers for verification.
- Ask before restarting either server.