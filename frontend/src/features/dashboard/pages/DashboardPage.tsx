import { PageHeader } from "@/components/ui/PageHeader";

import {
  BusinessHighlights,
  ClientAnalyticsSummary,
  ComplianceAnalyticsSummary,
  DashboardActivity,
  DashboardInsights,
  DocumentAnalyticsSummary,
  ExecutiveDashboard,
  NotificationsPanel,
  PerformanceSummary,
  QuickActions,
  RevenueSummary,
  SystemHealth,
  TopClients,
  UpcomingDeadlines,
} from "@/features/reports/components";

export default function DashboardPage() {
  return (
    <div className="space-y-10">

      <section className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-xl">

        <PageHeader
          title="Executive Dashboard"
          description="Monitor your firm's performance, compliance health and operational insights."
        />

        <div className="mt-8">
          <ExecutiveDashboard />
        </div>

      </section>

      <div className="grid gap-6 xl:grid-cols-3">
        <RevenueSummary />
        <ClientAnalyticsSummary />
        <ComplianceAnalyticsSummary />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <DocumentAnalyticsSummary />
        <PerformanceSummary />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <DashboardActivity />
        <DashboardInsights />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <UpcomingDeadlines />
        <QuickActions />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <TopClients />
        <SystemHealth />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <BusinessHighlights />
        <NotificationsPanel />
      </div>

    </div>
  );
}