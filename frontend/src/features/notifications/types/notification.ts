export type NotificationType =
  | "document"
  | "compliance"
  | "client"
  | "system";

export type NotificationPriority =
  | "low"
  | "medium"
  | "high";

export type NotificationStatus =
  | "read"
  | "unread";

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  priority: NotificationPriority;
  status: NotificationStatus;
  createdAt: string;
}
