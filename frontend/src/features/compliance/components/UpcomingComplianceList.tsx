import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

import { useComplianceDashboard } from "../hooks/useComplianceDashboard";

export function UpcomingComplianceList() {
  const { upcomingTasks, loading } = useComplianceDashboard();

  return (
    <Card className="p-6">
      <h2 className="mb-6 text-lg font-semibold">
        Upcoming Compliance
      </h2>

      {loading ? (
        <p className="text-sm text-slate-500">
          Loading...
        </p>
      ) : (
        <div className="space-y-4">
          {upcomingTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between rounded-lg border border-slate-200 p-4"
            >
              <div>
                <p className="font-medium">{task.title}</p>

                <p className="mt-1 text-sm text-slate-500">
                  {task.clientName}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Badge>{task.priority}</Badge>

                <span className="text-sm text-slate-500">
                  {task.dueDate}
                </span>
              </div>
            </div>
          ))}

          {upcomingTasks.length === 0 && (
            <p className="text-sm text-slate-500">
              No upcoming compliance.
            </p>
          )}
        </div>
      )}
    </Card>
  );
}