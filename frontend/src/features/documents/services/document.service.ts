import { Document } from "../types/document";

export type CreateDocumentDto = Omit<
  Document,
  "id" | "uploadedAt" | "updatedAt"
>;

export type UpdateDocumentDto =
  Partial<CreateDocumentDto>;

export interface DocumentService {
  getDocuments(): Promise<Document[]>;

  getDocumentById(
    id: string,
  ): Promise<Document | undefined>;

  searchDocuments(
    query: string,
  ): Promise<Document[]>;

  createDocument(
    payload: CreateDocumentDto,
  ): Promise<Document>;

  updateDocument(
    id: string,
    payload: UpdateDocumentDto,
  ): Promise<Document>;

  deleteDocument(
    id: string,
  ): Promise<void>;
}