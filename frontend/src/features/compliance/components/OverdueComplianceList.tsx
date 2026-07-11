import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

import { useComplianceDashboard } from "../hooks/useComplianceDashboard";

export function OverdueComplianceList() {
  const { overdueTasks, loading } = useComplianceDashboard();

  return (
    <Card className="p-6">
      <h2 className="mb-6 text-lg font-semibold">
        Overdue Compliance
      </h2>

      {loading ? (
        <p className="text-sm text-slate-500">
          Loading...
        </p>
      ) : overdueTasks.length === 0 ? (
        <p className="text-sm text-slate-500">
          No overdue compliance.
        </p>
      ) : (
        <div className="space-y-4">
          {overdueTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between rounded-lg border border-red-200 p-4"
            >
              <div>
                <p className="font-medium">{task.title}</p>

                <p className="mt-1 text-sm text-slate-500">
                  {task.clientName}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Badge>{task.priority}</Badge>

                <span className="text-sm text-red-600">
                  {task.dueDate}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}