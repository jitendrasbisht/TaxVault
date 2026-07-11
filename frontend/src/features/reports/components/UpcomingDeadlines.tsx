import { CalendarClock } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const deadlines = [
  {
    client: "ABC Pvt Ltd",
    task: "GST Return",
    due: "Tomorrow",
    priority: "High",
  },
  {
    client: "XYZ Industries",
    task: "TDS Filing",
    due: "2 Days",
    priority: "Medium",
  },
  {
    client: "Global Traders",
    task: "ROC Filing",
    due: "5 Days",
    priority: "Low",
  },
];

export function UpcomingDeadlines() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center gap-3">
        <CalendarClock className="h-6 w-6 text-red-600" />

        <div>
          <h3 className="text-lg font-semibold">
            Upcoming Deadlines
          </h3>

          <p className="text-sm text-slate-500">
            Next compliance activities
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {deadlines.map((item) => (
          <div
            key={`${item.client}-${item.task}`}
            className="flex items-center justify-between rounded-lg border border-slate-100 p-3"
          >
            <div>
              <p className="font-medium">{item.task}</p>
              <p className="text-sm text-slate-500">
                {item.client}
              </p>
              <p className="text-xs text-slate-400">
                Due: {item.due}
              </p>
            </div>

            <Badge>{item.priority}</Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}