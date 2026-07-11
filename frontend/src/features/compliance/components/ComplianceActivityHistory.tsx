import { Card } from "@/components/ui/Card";

import { ComplianceActivity } from "../types";

interface ComplianceActivityHistoryProps {
  activities: ComplianceActivity[];
}

export function ComplianceActivityHistory({
  activities,
}: ComplianceActivityHistoryProps) {
  return (
    <Card className="p-6">
      <h2 className="mb-6 text-lg font-semibold">
        Activity History
      </h2>

      {activities.length === 0 ? (
        <p className="text-sm text-slate-500">
          No activity available.
        </p>
      ) : (
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="rounded-lg border border-slate-200 p-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">
                  {activity.action}
                </span>

                <span className="text-xs text-slate-400">
                  {activity.performedAt}
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-600">
                {activity.description}
              </p>

              <p className="mt-2 text-xs text-slate-400">
                By {activity.performedBy}
              </p>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}