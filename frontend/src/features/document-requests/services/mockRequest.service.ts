import { mockRequests } from "../data/mockRequests";
import { DocumentRequest } from "../types/request";

export interface CreateRequestDto {
  clientId: string;
  clientName: string;
  title: string;
  description?: string;
  requestedDocuments: string[];
  status: DocumentRequest["status"];
  priority: DocumentRequest["priority"];
  dueDate: string;
  requestedBy: string;
  assignedTo?: string;
  remarks?: string;
}

export type UpdateRequestDto =
  Partial<CreateRequestDto>;

export interface RequestService {
  getRequests(): Promise<DocumentRequest[]>;

  getRequestById(
    id: string,
  ): Promise<DocumentRequest | undefined>;

  searchRequests(
    query: string,
  ): Promise<DocumentRequest[]>;

  createRequest(
    payload: CreateRequestDto,
  ): Promise<DocumentRequest>;

  updateRequest(
    id: string,
    payload: UpdateRequestDto,
  ): Promise<DocumentRequest>;

  deleteRequest(
    id: string,
  ): Promise<void>;
}

const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

class MockRequestService
  implements RequestService
{
  private requests: DocumentRequest[] = [
    ...mockRequests,
  ];

  async getRequests(): Promise<DocumentRequest[]> {
    await delay(300);

    return [...this.requests];
  }

  async getRequestById(
    id: string,
  ): Promise<DocumentRequest | undefined> {
    await delay(300);

    return this.requests.find(
      (request) => request.id === id,
    );
  }

  async searchRequests(
    query: string,
  ): Promise<DocumentRequest[]> {
    await delay(300);

    const searchTerm =
      query.trim().toLowerCase();

    if (!searchTerm) {
      return [...this.requests];
    }

    return this.requests.filter(
      (request) =>
        request.title
          .toLowerCase()
          .includes(searchTerm) ||
        request.clientName
          .toLowerCase()
          .includes(searchTerm),
    );
  }

  async createRequest(
    payload: CreateRequestDto,
  ): Promise<DocumentRequest> {
    await delay(300);

    const now =
      new Date().toISOString();

    const request: DocumentRequest = {
      id: crypto.randomUUID(),

      ...payload,

      createdAt: now,

      updatedAt: now,
    };

    this.requests.unshift(request);

    return request;
  }

  async updateRequest(
    id: string,
    payload: UpdateRequestDto,
  ): Promise<DocumentRequest> {
    await delay(300);

    const index =
      this.requests.findIndex(
        (request) =>
          request.id === id,
      );

    if (index === -1) {
      throw new Error(
        "Request not found.",
      );
    }

    const updated: DocumentRequest = {
      ...this.requests[index],

      ...payload,

      updatedAt:
        new Date().toISOString(),
    };

    this.requests[index] =
      updated;

    return updated;
  }

  async deleteRequest(
    id: string,
  ): Promise<void> {
    await delay(300);

    const index =
      this.requests.findIndex(
        (request) =>
          request.id === id,
      );

    if (index === -1) {
      throw new Error(
        "Request not found.",
      );
    }

    this.requests.splice(index, 1);
  }
}

export const requestService =
  new MockRequestService();
