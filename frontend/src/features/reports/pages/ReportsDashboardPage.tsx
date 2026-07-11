import { PageHeader } from "@/components/ui/PageHeader";

import {
  BusinessHighlights,
  ClientAnalyticsSummary,
  ComplianceAnalyticsSummary,
  DashboardActivity,
  DashboardInsights,
  DocumentAnalyticsSummary,
  ExecutiveDashboard,
  ExportReports,
  MonthlyTrendSummary,
  NotificationsPanel,
  PerformanceSummary,
  QuickActions,
  ReportFilters,
  ReportStatusOverview,
  RevenueSummary,
  SystemHealth,
  TopClients,
  UpcomingDeadlines,
} from "../components";

export function ReportsDashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Reports & Dashboard"
        description="Executive reporting, revenue insights and business analytics."
      />

      <ReportFilters />

      <ExecutiveDashboard />

      <div className="grid gap-6 xl:grid-cols-3">
        <RevenueSummary />
        <ClientAnalyticsSummary />
        <ComplianceAnalyticsSummary />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <DocumentAnalyticsSummary />
        <MonthlyTrendSummary />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <DashboardActivity />
        <DashboardInsights />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <PerformanceSummary />
        <UpcomingDeadlines />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <QuickActions />
        <SystemHealth />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <TopClients />
        <BusinessHighlights />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <NotificationsPanel />
        <ReportStatusOverview />
      </div>

      <ExportReports />
    </div>
  );
}