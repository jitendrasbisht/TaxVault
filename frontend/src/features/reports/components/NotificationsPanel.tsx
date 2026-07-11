import { Bell } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const notifications = [
  {
    id: 1,
    title: "24 Documents expiring this week",
    type: "Warning",
  },
  {
    id: 2,
    title: "12 Compliance tasks due tomorrow",
    type: "Urgent",
  },
  {
    id: 3,
    title: "Revenue target achieved",
    type: "Success",
  },
  {
    id: 4,
    title: "17 New clients onboarded",
    type: "Info",
  },
];

export function NotificationsPanel() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center gap-3">
        <Bell className="h-6 w-6 text-indigo-600" />

        <div>
          <h3 className="text-lg font-semibold">
            Notifications
          </h3>

          <p className="text-sm text-slate-500">
            Recent business alerts
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {notifications.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-lg border border-slate-100 p-3"
          >
            <span className="text-sm">
              {item.title}
            </span>

            <Badge>{item.type}</Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}