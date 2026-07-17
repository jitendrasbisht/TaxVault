import {
  DocumentRequest,
  RequestPriority,
  RequestStatus,
} from "../types/request";

export const mockRequests: DocumentRequest[] = [
  {
    id: crypto.randomUUID(),

    clientId: "CL-1001",
    clientName: "ABC Technologies Pvt Ltd",

    title: "FY 2025 Income Tax Documents",

    description:
      "Collect documents required for Income Tax Return filing.",

    requestedDocuments: [
      "Bank Statements",
      "Sales Register",
      "Purchase Register",
      "GST Returns",
      "Form 26AS",
    ],

    status: RequestStatus.SENT,

    priority: RequestPriority.HIGH,

    dueDate: "2026-08-15",

    requestedBy: "Admin",

    assignedTo: "Rahul Sharma",

    createdAt: "2026-07-01T10:00:00Z",

    updatedAt: "2026-07-02T09:30:00Z",
  },

  {
    id: crypto.randomUUID(),

    clientId: "CL-1002",
    clientName: "XYZ Industries",

    title: "GST Monthly Filing",

    description:
      "Monthly GST supporting documents.",

    requestedDocuments: [
      "Sales Invoices",
      "Purchase Invoices",
      "E-Way Bills",
    ],

    status:
      RequestStatus.PARTIALLY_RECEIVED,

    priority: RequestPriority.MEDIUM,

    dueDate: "2026-08-05",

    requestedBy: "Admin",

    assignedTo: "Neha Kapoor",

    createdAt: "2026-07-03T08:00:00Z",

    updatedAt: "2026-07-06T11:20:00Z",
  },

  {
    id: crypto.randomUUID(),

    clientId: "CL-1003",
    clientName: "Global Traders",

    title: "ROC Annual Filing",

    description:
      "Documents for ROC Annual Return.",

    requestedDocuments: [
      "Financial Statements",
      "Board Resolution",
      "Director KYC",
    ],

    status: RequestStatus.COMPLETED,

    priority: RequestPriority.LOW,

    dueDate: "2026-07-25",

    requestedBy: "Admin",

    assignedTo: "Amit Verma",

    createdAt: "2026-06-20T10:15:00Z",

    updatedAt: "2026-07-01T09:00:00Z",

    completedAt: "2026-07-01T09:00:00Z",

    remarks:
      "All requested documents received.",
  },
];
