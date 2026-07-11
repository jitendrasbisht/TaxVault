import { ExecutiveDashboard } from "../components";

export function ReportsDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Reports & Dashboard
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Executive insights and analytics overview.
        </p>
      </div>

      <ExecutiveDashboard />
    </div>
  );
}