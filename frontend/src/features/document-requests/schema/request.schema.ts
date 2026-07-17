import { z } from "zod";

import {
  RequestPriority,
  RequestStatus,
} from "../types/request";

export const requestSchema = z.object({
  clientId: z
    .string()
    .min(1, "Client is required."),

  clientName: z
    .string()
    .min(2, "Client name is required."),

  title: z
    .string()
    .min(3, "Title is required."),

  description: z
    .string()
    .optional(),

  requestedDocuments: z
    .array(z.string())
    .min(
      1,
      "At least one document must be requested.",
    ),

  status: z.nativeEnum(
    RequestStatus,
  ),

  priority: z.nativeEnum(
    RequestPriority,
  ),

  dueDate: z
    .string()
    .min(1, "Due date is required."),

  requestedBy: z
    .string()
    .min(
      2,
      "Requested By is required.",
    ),

  assignedTo: z
    .string()
    .optional(),

  remarks: z
    .string()
    .optional(),
});

export type RequestFormValues =
  z.infer<
    typeof requestSchema
  >;
