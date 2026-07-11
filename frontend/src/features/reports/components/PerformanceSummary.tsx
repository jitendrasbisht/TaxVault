import { TrendingUp } from "lucide-react";

import { Card } from "@/components/ui/Card";

export function PerformanceSummary() {
  const performance = [
    { label: "Revenue Growth", value: "12.4%" },
    { label: "Client Growth", value: "8.7%" },
    { label: "Compliance Rate", value: "96%" },
    { label: "Document Accuracy", value: "99.1%" },
  ];

  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center gap-3">
        <TrendingUp className="h-6 w-6 text-emerald-600" />

        <div>
          <h3 className="text-lg font-semibold">
            Performance Summary
          </h3>

          <p className="text-sm text-slate-500">
            Overall business performance
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {performance.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between"
          >
            <span className="text-sm text-slate-600">
              {item.label}
            </span>

            <span className="font-semibold text-emerald-600">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}