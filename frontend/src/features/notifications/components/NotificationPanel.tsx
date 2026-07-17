import { NotificationList } from "../components";
import { useNotifications } from "../hooks";

interface NotificationPanelProps {
  open: boolean;
}

export default function NotificationPanel({
  open,
}: NotificationPanelProps) {
  const {
    notifications,
    markAsRead,
    markAllAsRead,
  } = useNotifications();

  if (!open) {
    return null;
  }

  return (
    <div className="absolute right-0 top-12 z-50 w-96 rounded-lg border bg-background shadow-lg">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <h3 className="font-semibold">
          Notifications
        </h3>

        <button
          type="button"
          onClick={() => void markAllAsRead()}
          className="text-xs text-blue-600 hover:underline"
        >
          Mark all as read
        </button>
      </div>

      <div className="max-h-96 overflow-y-auto p-2">
        <NotificationList
          notifications={notifications}
          onSelect={(notification) =>
            void markAsRead(notification.id)
          }
        />
      </div>
    </div>
  );
}
