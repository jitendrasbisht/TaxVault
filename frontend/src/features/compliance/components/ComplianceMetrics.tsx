import { Card } from "@/components/ui/Card";

interface ComplianceMetricsProps {
  total: number;
  completed: number;
  pending: number;
}

export function ComplianceMetrics({
  total,
  completed,
  pending,
}: ComplianceMetricsProps) {
  const completion =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <Card className="p-6">
      <h2 className="mb-6 text-lg font-semibold">
        Compliance Metrics
      </h2>

      <div className="space-y-5">
        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span>Completion</span>

            <span>{completion}%</span>
          </div>

          <div className="h-2 rounded-full bg-slate-200">
            <div
              className="h-2 rounded-full bg-emerald-600"
              style={{ width: `${completion}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold">{total}</p>
            <p className="text-xs text-slate-500">Total</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-emerald-600">
              {completed}
            </p>
            <p className="text-xs text-slate-500">
              Completed
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-amber-600">
              {pending}
            </p>
            <p className="text-xs text-slate-500">
              Pending
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}