import { Bell } from "lucide-react";

interface NotificationBadgeProps {
  count: number;
}

export default function NotificationBadge({
  count,
}: NotificationBadgeProps) {
  return (
    <button
      type="button"
      className="relative inline-flex items-center justify-center rounded-lg p-2 hover:bg-muted transition-colors"
    >
      <Bell className="h-5 w-5" />

      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-semibold text-white">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
}
