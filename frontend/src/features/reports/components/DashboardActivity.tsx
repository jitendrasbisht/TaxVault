import { Clock3 } from "lucide-react";

import { Card } from "@/components/ui/Card";

const activities = [
  {
    id: 1,
    title: "GST Return Filed",
    client: "ABC Pvt Ltd",
    time: "10 mins ago",
  },
  {
    id: 2,
    title: "New Client Added",
    client: "XYZ Industries",
    time: "35 mins ago",
  },
  {
    id: 3,
    title: "Compliance Completed",
    client: "Sunrise LLP",
    time: "1 hour ago",
  },
  {
    id: 4,
    title: "Document Uploaded",
    client: "Global Traders",
    time: "Today",
  },
];

export function DashboardActivity() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center gap-3">
        <Clock3 className="h-6 w-6 text-indigo-600" />

        <div>
          <h3 className="text-lg font-semibold">
            Recent Activity
          </h3>

          <p className="text-sm text-slate-500">
            Latest business updates
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="border-b border-slate-100 pb-4 last:border-0 last:pb-0"
          >
            <p className="font-medium text-slate-900">
              {activity.title}
            </p>

            <p className="text-sm text-slate-500">
              {activity.client}
            </p>

            <p className="mt-1 text-xs text-slate-400">
              {activity.time}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}