import { Card } from "@/components/ui/Card";

import { useExecutiveDashboard } from "../hooks/useExecutiveDashboard";

export function ExecutiveDashboard() {
  const { metrics } = useExecutiveDashboard();

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.id}>
          <div className="space-y-2">
            <p className="text-sm text-slate-500">{metric.title}</p>

            <h2 className="text-3xl font-bold">{metric.value}</h2>

            <p
              className={`text-sm font-medium ${
                metric.trend === "up"
                  ? "text-green-600"
                  : metric.trend === "down"
                  ? "text-red-600"
                  : "text-slate-500"
              }`}
            >
              {metric.change}% vs last month
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}