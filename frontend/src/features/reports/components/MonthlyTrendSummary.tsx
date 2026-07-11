import { TrendingUp } from "lucide-react";

import { Card } from "@/components/ui/Card";

import { useRevenueDashboard } from "../hooks/useRevenueDashboard";

export function MonthlyTrendSummary() {
  const { revenue } = useRevenueDashboard();

  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center gap-3">
        <TrendingUp className="h-6 w-6 text-emerald-600" />

        <div>
          <h3 className="text-lg font-semibold">
            Monthly Revenue Trend
          </h3>

          <p className="text-sm text-slate-500">
            Last six months
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {revenue.map((item) => (
          <div key={item.month}>
            <div className="mb-1 flex justify-between text-sm">
              <span>{item.month}</span>

              <span className="font-medium">
                ₹{item.revenue.toLocaleString()}
              </span>
            </div>

            <div className="h-2 rounded-full bg-slate-200">
              <div
                className="h-2 rounded-full bg-emerald-500"
                style={{
                  width: `${(item.revenue / 3200000) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}