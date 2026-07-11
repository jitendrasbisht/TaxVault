import { Users } from "lucide-react";

import { Card } from "@/components/ui/Card";

import { useClientAnalytics } from "../hooks/useClientAnalytics";

export function ClientAnalyticsSummary() {
  const { analytics, loading } = useClientAnalytics();

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
        <Users className="h-6 w-6 text-blue-600" />

        <div>
          <h3 className="text-lg font-semibold">
            Client Analytics
          </h3>

          <p className="text-sm text-slate-500">
            Client portfolio overview
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-slate-500">Total</p>
          <p className="text-2xl font-bold">
            {analytics.totalClients}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Active</p>
          <p className="text-2xl font-bold text-emerald-600">
            {analytics.activeClients}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Inactive</p>
          <p className="text-2xl font-bold text-amber-600">
            {analytics.inactiveClients}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">New</p>
          <p className="text-2xl font-bold text-blue-600">
            {analytics.newClients}
          </p>
        </div>
      </div>
    </Card>
  );
}