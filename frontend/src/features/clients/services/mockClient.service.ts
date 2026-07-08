import { mockClients } from "../mock/clients";
import { Client } from "../types/client";
import { ClientService } from "./client.service";

const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

class MockClientService implements ClientService {
  async getClients(): Promise<Client[]> {
    await delay(300);

    return [...mockClients];
  }

  async getClientById(id: string): Promise<Client | undefined> {
    await delay(300);

    return mockClients.find((client) => client.id === id);
  }

  async searchClients(query: string): Promise<Client[]> {
    await delay(300);

    const searchTerm = query.trim().toLowerCase();

    if (!searchTerm) {
      return [...mockClients];
    }

    return mockClients.filter((client) => {
      return (
        client.name.toLowerCase().includes(searchTerm) ||
        client.email.toLowerCase().includes(searchTerm) ||
        client.pan.toLowerCase().includes(searchTerm)
      );
    });
  }
}

export const clientService = new MockClientService();