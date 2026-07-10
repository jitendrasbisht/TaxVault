export enum DocumentStatus {
  DRAFT = "DRAFT",
  PENDING_REVIEW = "PENDING_REVIEW",
  APPROVED = "APPROVED",
  ARCHIVED = "ARCHIVED",
}

export enum DocumentCategory {
  INCOME_TAX = "INCOME_TAX",
  GST = "GST",
  ROC = "ROC",
  AUDIT = "AUDIT",
  TDS = "TDS",
  PAYROLL = "PAYROLL",
  OTHER = "OTHER",
}

export interface Document {
  id: string;

  clientId: string;
  clientName: string;

  name: string;

  category: DocumentCategory;

  status: DocumentStatus;

  fileType: string;

  fileSize: number;

  uploadedBy: string;

  uploadedAt: string;

  updatedAt: string;

  version: number;

  tags: string[];

  description?: string;
}