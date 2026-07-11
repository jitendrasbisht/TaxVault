import { Card } from "@/components/ui/Card";

import { useRevenueDashboard } from "../hooks/useRevenueDashboard";

export function RevenueSummary() {
  const { revenue } = useRevenueDashboard();

  const totalRevenue = revenue.reduce(
    (total, item) => total + item.revenue,
    0,
  );

  return (
    <Card>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Revenue Overview
          </h2>

          <p className="text-sm text-slate-500">
            Monthly revenue summary
          </p>
        </div>

        <div>
          <p className="text-4xl font-bold">
            ₹{totalRevenue.toLocaleString()}
          </p>
        </div>

        <div className="space-y-2">
          {revenue.map((item) => (
            <div
              key={item.month}
              className="flex items-center justify-between border-b border-slate-100 py-2 last:border-0"
            >
              <span>{item.month}</span>

              <span className="font-semibold">
                ₹{item.revenue.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}