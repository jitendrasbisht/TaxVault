export enum RequestStatus {
  DRAFT = "DRAFT",
  SENT = "SENT",
  PARTIALLY_RECEIVED = "PARTIALLY_RECEIVED",
  COMPLETED = "COMPLETED",
  OVERDUE = "OVERDUE",
  CANCELLED = "CANCELLED",
}

export enum RequestPriority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
  URGENT = "URGENT",
}

export interface DocumentRequest {
  id: string;

  clientId: string;
  clientName: string;

  title: string;

  description?: string;

  requestedDocuments: string[];

  status: RequestStatus;

  priority: RequestPriority;

  dueDate: string;

  requestedBy: string;

  assignedTo?: string;

  createdAt: string;

  updatedAt: string;

  completedAt?: string;

  remarks?: string;
}
