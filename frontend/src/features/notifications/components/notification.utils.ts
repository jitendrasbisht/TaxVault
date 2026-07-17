import type { Notification } from "../types/notification";

export function getUnreadCount(
  notifications: Notification[],
): number {
  return notifications.filter(
    (notification) => notification.status === "unread",
  ).length;
}

export function sortNotifications(
  notifications: Notification[],
): Notification[] {
  return [...notifications].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() -
      new Date(a.createdAt).getTime(),
  );
}
