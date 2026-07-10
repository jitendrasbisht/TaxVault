import { Client } from "../types/client";

export interface CreateClientDto {
  name: string;
  email: string;
  phone: string;
  pan: string;
  gstin?: string;
  address: string;
  type: Client["type"];
  status: Client["status"];
}

export interface UpdateClientDto extends CreateClientDto {}

export interface ClientService {
  /**
   * Returns all clients.
   */
  getClients(): Promise<Client[]>;

  /**
   * Returns a single client by ID.
   */
  getClientById(
    id: string,
  ): Promise<Client | undefined>;

  /**
   * Searches clients by name, email or PAN.
   */
  searchClients(
    query: string,
  ): Promise<Client[]>;

  /**
   * Creates a new client.
   */
  createClient(
    payload: CreateClientDto,
  ): Promise<Client>;

  /**
   * Updates an existing client.
   */
  updateClient(
    id: string,
    payload: UpdateClientDto,
  ): Promise<Client>;

  /**
   * Deletes a client.
   */
  deleteClient(
    id: string,
  ): Promise<void>;
}