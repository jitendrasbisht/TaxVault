import { PageHeader } from "@/components/ui/PageHeader";

import {
  ExecutiveDashboard,
  RevenueSummary,
} from "../components";

export function ReportsDashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Reports & Dashboard"
        description="Executive insights, revenue trends and business analytics."
      />

      <ExecutiveDashboard />

      <RevenueSummary />
    </div>
  );
}