import { Client } from "./client";

export interface ClientActions {
  onEdit(client: Client): void;
  onDelete(client: Client): void;
}