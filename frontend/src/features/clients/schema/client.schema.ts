import { z } from "zod";

import {
  ClientStatus,
  ClientType,
} from "../types/client";

export const clientSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Client name must be at least 3 characters.")
    .max(100, "Client name cannot exceed 100 characters."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  phone: z
    .string()
    .trim()
    .regex(
      /^[6-9]\d{9}$/,
      "Please enter a valid 10 digit mobile number.",
    ),

  pan: z
    .string()
    .trim()
    .toUpperCase()
    .regex(
      /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
      "Please enter a valid PAN number.",
    ),

  gstin: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),

  address: z
    .string()
    .trim()
    .min(10, "Address must be at least 10 characters.")
    .max(250, "Address cannot exceed 250 characters."),

  type: z.nativeEnum(ClientType),

  status: z.nativeEnum(ClientStatus),
});

export type ClientFormValues = z.infer<
  typeof clientSchema
>;