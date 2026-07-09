import { ClientStatus, ClientType } from "./client";

export interface ClientFormData {
  name: string;
  email: string;
  phone: string;
  pan: string;
  gstin: string;
  address: string;
  type: ClientType;
  status: ClientStatus;
}

export const defaultClientFormValues: ClientFormData = {
  name: "",
  email: "",
  phone: "",
  pan: "",
  gstin: "",
  address: "",
  type: ClientType.INDIVIDUAL,
  status: ClientStatus.ACTIVE,
};