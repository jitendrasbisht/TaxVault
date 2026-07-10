import { mockClients } from "../mock/clients";
import { Client } from "../types/client";

import {
  ClientService,
  CreateClientDto,
  UpdateClientDto,
} from "./client.service";

const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

class MockClientService
  implements ClientService
{
  private clients: Client[] = [
    ...mockClients,
  ];

  async getClients(): Promise<Client[]> {
    await delay(300);

    return [...this.clients];
  }

  async getClientById(
    id: string,
  ): Promise<Client | undefined> {
    await delay(300);

    return this.clients.find(
      (client) => client.id === id,
    );
  }

  async searchClients(
    query: string,
  ): Promise<Client[]> {
    await delay(300);

    const searchTerm = query
      .trim()
      .toLowerCase();

    if (!searchTerm) {
      return [...this.clients];
    }

    return this.clients.filter(
      (client) =>
        client.name
          .toLowerCase()
          .includes(searchTerm) ||
        client.email
          .toLowerCase()
          .includes(searchTerm) ||
        client.pan
          .toLowerCase()
          .includes(searchTerm),
    );
  }

  async createClient(
    payload: CreateClientDto,
  ): Promise<Client> {
    await delay(300);

    const now =
      new Date().toISOString();

    const client: Client = {
      id: crypto.randomUUID(),
      ...payload,
      createdAt: now,
      updatedAt: now,
    };

    this.clients.unshift(client);

    return client;
  }

  async updateClient(
    id: string,
    payload: UpdateClientDto,
  ): Promise<Client> {
    await delay(300);

    const index =
      this.clients.findIndex(
        (client) => client.id === id,
      );

    if (index === -1) {
      throw new Error(
        "Client not found.",
      );
    }

    const updated: Client = {
      ...this.clients[index],
      ...payload,
      updatedAt:
        new Date().toISOString(),
    };

    this.clients[index] = updated;

    return updated;
  }

  async deleteClient(
    id: string,
  ): Promise<void> {
    await delay(300);

    const index =
      this.clients.findIndex(
        (client) => client.id === id,
      );

    if (index === -1) {
      throw new Error(
        "Client not found.",
      );
    }

    this.clients.splice(index, 1);
  }
}

export const clientService =
  new MockClientService();