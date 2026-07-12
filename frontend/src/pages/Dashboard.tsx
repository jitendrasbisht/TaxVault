import { PageHeader } from "@/components/ui/PageHeader";

import {
  RecentActivityCard,
  UpcomingDeadlinesCard,
} from "@/features/dashboard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="Dashboard"
        description="Welcome back to TaxVault Enterprise."
      />

      <div className="grid gap-6 lg:grid-cols-4">

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <p className="text-sm text-slate-500">
            Active Clients
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            1,254
          </h2>

          <p className="mt-2 text-sm text-emerald-600">
            ↑ 12% this month
          </p>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <p className="text-sm text-slate-500">
            Open Cases
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            218
          </h2>

          <p className="mt-2 text-sm text-amber-600">
            18 require attention
          </p>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <p className="text-sm text-slate-500">
            Pending Documents
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            76
          </h2>

          <p className="mt-2 text-sm text-blue-600">
            Awaiting upload
          </p>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <p className="text-sm text-slate-500">
            Compliance Score
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            98%
          </h2>

          <p className="mt-2 text-sm text-emerald-600">
            Excellent
          </p>

        </div>

      </div>

      <div className="grid gap-6 xl:grid-cols-2">

        <RecentActivityCard />

        <UpcomingDeadlinesCard />

      </div>

    </div>
  );
}