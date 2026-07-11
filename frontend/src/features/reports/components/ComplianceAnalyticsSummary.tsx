import { ShieldCheck } from "lucide-react";

import { Card } from "@/components/ui/Card";

import { useComplianceAnalytics } from "../hooks/useComplianceAnalytics";

export function ComplianceAnalyticsSummary() {
  const { analytics, loading } =
    useComplianceAnalytics();

  if (loading || !analytics) {
    return (
      <Card className="p-6">
        <p className="text-sm text-slate-500">Loading...</p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="mb-5 flex items-center gap-3">
        <ShieldCheck className="h-6 w-6 text-violet-600" />

        <div>
          <h3 className="text-lg font-semibold">
            Compliance Analytics
          </h3>

          <p className="text-sm text-slate-500">
            Current compliance status
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-slate-500">Total</p>
          <p className="text-2xl font-bold">
            {analytics.totalItems}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Compliant
          </p>
          <p className="text-2xl font-bold text-emerald-600">
            {analytics.compliant}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Pending</p>
          <p className="text-2xl font-bold text-amber-600">
            {analytics.pending}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Overdue</p>
          <p className="text-2xl font-bold text-red-600">
            {analytics.overdue}
          </p>
        </div>
      </div>
    </Card>
  );
}