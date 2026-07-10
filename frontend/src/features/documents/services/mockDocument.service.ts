import { mockDocuments } from "../mock/documents";
import { Document } from "../types/document";

import {
  CreateDocumentDto,
  DocumentService,
  UpdateDocumentDto,
} from "./document.service";

const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

class MockDocumentService
  implements DocumentService
{
  private documents: Document[] = [
    ...mockDocuments,
  ];

  async getDocuments(): Promise<Document[]> {
    await delay(300);

    return [...this.documents];
  }

  async getDocumentById(
    id: string,
  ): Promise<Document | undefined> {
    await delay(300);

    return this.documents.find(
      (document) => document.id === id,
    );
  }

  async searchDocuments(
    query: string,
  ): Promise<Document[]> {
    await delay(300);

    const searchTerm = query
      .trim()
      .toLowerCase();

    if (!searchTerm) {
      return [...this.documents];
    }

    return this.documents.filter(
      (document) =>
        document.name
          .toLowerCase()
          .includes(searchTerm) ||
        document.clientName
          .toLowerCase()
          .includes(searchTerm),
    );
  }

  async createDocument(
    payload: CreateDocumentDto,
  ): Promise<Document> {
    await delay(300);

    const now =
      new Date().toISOString();

    const document: Document = {
      id: crypto.randomUUID(),
      ...payload,
      uploadedAt: now,
      updatedAt: now,
    };

    this.documents.unshift(document);

    return document;
  }

  async updateDocument(
    id: string,
    payload: UpdateDocumentDto,
  ): Promise<Document> {
    await delay(300);

    const index =
      this.documents.findIndex(
        (document) =>
          document.id === id,
      );

    if (index === -1) {
      throw new Error(
        "Document not found.",
      );
    }

    const updated: Document = {
      ...this.documents[index],
      ...payload,
      updatedAt:
        new Date().toISOString(),
    };

    this.documents[index] = updated;

    return updated;
  }

  async deleteDocument(
    id: string,
  ): Promise<void> {
    await delay(300);

    const index =
      this.documents.findIndex(
        (document) =>
          document.id === id,
      );

    if (index === -1) {
      throw new Error(
        "Document not found.",
      );
    }

    this.documents.splice(index, 1);
  }
}

export const documentService =
  new MockDocumentService();