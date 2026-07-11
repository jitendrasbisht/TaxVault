import { Card } from "@/components/ui/Card";

interface ComplianceTaskStatsProps {
  pending: number;
  completed: number;
  overdue: number;
}

export function ComplianceTaskStats({
  pending,
  completed,
  overdue,
}: ComplianceTaskStatsProps) {
  return (
    <Card className="p-5">
      <h3 className="mb-5 text-lg font-semibold">
        Task Statistics
      </h3>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Pending</span>
          <span className="font-semibold">{pending}</span>
        </div>

        <div className="flex justify-between">
          <span>Completed</span>
          <span className="font-semibold text-emerald-600">
            {completed}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Overdue</span>
          <span className="font-semibold text-red-600">
            {overdue}
          </span>
        </div>
      </div>
    </Card>
  );
}