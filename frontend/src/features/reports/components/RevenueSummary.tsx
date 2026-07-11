import { Card } from "@/components/ui/Card";

import { useRevenueDashboard } from "../hooks/useRevenueDashboard";

export function RevenueSummary() {
  const { revenue } = useRevenueDashboard();

  const totalRevenue = revenue.reduce(
    (total, item) => total + item.revenue,
    0,
  );

  return (
    <Card className="p-6">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Revenue Overview
        </p>

        <h2 className="mt-2 text-4xl font-bold">
          ₹{totalRevenue.toLocaleString()}
        </h2>
      </div>

      <div className="space-y-3">
        {revenue.map((item) => (
          <div
            key={item.month}
            className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3 transition-colors hover:bg-slate-100"
          >
            <span className="font-medium">
              {item.month}
            </span>

            <span className="font-bold text-emerald-600">
              ₹{item.revenue.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}