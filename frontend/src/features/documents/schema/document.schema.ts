import { z } from "zod";

import {
  DocumentCategory,
  DocumentStatus,
} from "../types/document";

export const documentSchema = z.object({
  clientId: z
    .string()
    .min(1, "Client is required."),

  clientName: z
    .string()
    .min(2, "Client name is required."),

  name: z
    .string()
    .min(3, "Document name is required."),

  category: z.nativeEnum(
    DocumentCategory,
  ),

  status: z.nativeEnum(
    DocumentStatus,
  ),

  fileType: z
    .string()
    .min(1, "File type is required."),

  fileSize: z
    .number()
    .min(
      1,
      "File size must be greater than zero.",
    ),

  uploadedBy: z
    .string()
    .min(
      2,
      "Uploaded By is required.",
    ),

  version: z
    .number()
    .min(1),
  tags: z.array(z.string()),

  description: z
    .string()
    .optional(),
});

export type DocumentFormValues =
  z.infer<
    typeof documentSchema
  >;