import type { Notification } from "../types/notification";

interface NotificationItemProps {
  notification: Notification;
  onClick?: (notification: Notification) => void;
}

export default function NotificationItem({
  notification,
  onClick,
}: NotificationItemProps) {
  return (
    <button
      type="button"
      onClick={() => onClick?.(notification)}
      className={`flex w-full flex-col items-start gap-1 rounded-lg p-3 text-left transition-colors hover:bg-muted ${
        notification.status === "unread"
          ? "bg-blue-50"
          : ""
      }`}
    >
      <div className="flex w-full items-center justify-between">
        <span className="font-medium">
          {notification.title}
        </span>

        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
            notification.priority === "high"
              ? "bg-red-100 text-red-700"
              : notification.priority === "medium"
                ? "bg-amber-100 text-amber-700"
                : "bg-slate-100 text-slate-700"
          }`}
        >
          {notification.priority}
        </span>
      </div>

      <p className="text-sm text-muted-foreground">
        {notification.message}
      </p>

      <span className="text-xs text-muted-foreground">
        {notification.createdAt}
      </span>
    </button>
  );
}
