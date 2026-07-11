import { Lightbulb } from "lucide-react";

import { Card } from "@/components/ui/Card";

export function DashboardInsights() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center gap-3">
        <Lightbulb className="h-6 w-6 text-amber-500" />

        <div>
          <h3 className="text-lg font-semibold">
            AI Insights
          </h3>

          <p className="text-sm text-slate-500">
            Business recommendations
          </p>
        </div>
      </div>

      <ul className="space-y-4 text-sm">
        <li>• Compliance completion improved by 8% this month.</li>
        <li>• Client onboarding increased by 12%.</li>
        <li>• Only 24 documents are nearing expiry.</li>
        <li>• Revenue trend continues to grow month over month.</li>
      </ul>
    </Card>
  );
}