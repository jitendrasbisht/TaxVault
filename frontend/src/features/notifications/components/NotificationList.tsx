import type { Notification } from "../types/notification";
import NotificationEmptyState from "./NotificationEmptyState";
import NotificationItem from "./NotificationItem";

interface NotificationListProps {
  notifications: Notification[];
  onSelect?: (notification: Notification) => void;
}

export default function NotificationList({
  notifications,
  onSelect,
}: NotificationListProps) {
  if (notifications.length === 0) {
    return <NotificationEmptyState />;
  }

  return (
    <div className="divide-y">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onClick={onSelect}
        />
      ))}
    </div>
  );
}
