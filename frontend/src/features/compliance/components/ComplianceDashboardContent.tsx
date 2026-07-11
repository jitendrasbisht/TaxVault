import { ComplianceSummaryCards } from "./ComplianceSummaryCards";
import { ComplianceCalendar } from "./ComplianceCalendar";
import { UpcomingComplianceList } from "./UpcomingComplianceList";
import { OverdueComplianceList } from "./OverdueComplianceList";

export function ComplianceDashboardContent() {
  return (
    <div className="space-y-8">
      <ComplianceSummaryCards />

      <div className="grid gap-6 xl:grid-cols-2">
        <UpcomingComplianceList />

        <OverdueComplianceList />
      </div>

      <ComplianceCalendar />
    </div>
  );
}