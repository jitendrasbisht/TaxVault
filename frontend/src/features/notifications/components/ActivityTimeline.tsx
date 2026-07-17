import type { Notification } from "../types/notification";

interface ActivityTimelineProps {
  notifications: Notification[];
}

export default function ActivityTimeline({
  notifications,
}: ActivityTimelineProps) {
  return (
    <div className="rounded-lg border bg-background">
      <div className="border-b px-4 py-3">
        <h3 className="font-semibold">
          Recent Activity
        </h3>
      </div>

      <div className="divide-y">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start gap-3 px-4 py-3"
          >
            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600" />

            <div className="flex-1">
              <p className="font-medium">
                {notification.title}
              </p>

              <p className="text-sm text-muted-foreground">
                {notification.message}
              </p>

              <span className="text-xs text-muted-foreground">
                {notification.createdAt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
