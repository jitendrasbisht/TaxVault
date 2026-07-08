import { Client } from "../types/client";

export interface ClientService {
  /**
   * Returns all clients.
   */
  getClients(): Promise<Client[]>;

  /**
   * Returns a single client by its ID.
   */
  getClientById(id: string): Promise<Client | undefined>;

  /**
   * Searches clients by name, email, or PAN.
   */
  searchClients(query: string): Promise<Client[]>;
}