export enum ClientStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  ARCHIVED = "ARCHIVED",
}

export enum ClientType {
  INDIVIDUAL = "INDIVIDUAL",
  BUSINESS = "BUSINESS",
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  pan: string;
  gstin?: string;
  type: ClientType;
  status: ClientStatus;
  address: string;
  createdAt: string;
  updatedAt: string;
}