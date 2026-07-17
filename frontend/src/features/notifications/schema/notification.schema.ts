import { z } from "zod";

export const notificationSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  message: z.string().min(1),
  type: z.enum([
    "document",
    "compliance",
    "client",
    "system",
  ]),
  priority: z.enum([
    "low",
    "medium",
    "high",
  ]),
  status: z.enum([
    "read",
    "unread",
  ]),
  createdAt: z.string(),
});

export type NotificationInput = z.infer<typeof notificationSchema>;
