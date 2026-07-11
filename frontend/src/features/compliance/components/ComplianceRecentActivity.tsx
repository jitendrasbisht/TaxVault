import { Card } from "@/components/ui/Card";

import { useCompliance } from "../hooks/useCompliance";

export function ComplianceRecentActivity() {
  const { tasks } = useCompliance();

  const recent = tasks.slice(0, 5);

  return (
    <Card className="p-6">
      <h2 className="mb-6 text-lg font-semibold">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {recent.map((task) => (
          <div
            key={task.id}
            className="border-b pb-3 last:border-none"
          >
            <p className="font-medium">{task.title}</p>

            <p className="mt-1 text-sm text-slate-500">
              Updated: {task.updatedAt}
            </p>
          </div>
        ))}

        {recent.length === 0 && (
          <p className="text-sm text-slate-500">
            No recent activity.
          </p>
        )}
      </div>
    </Card>
  );
}