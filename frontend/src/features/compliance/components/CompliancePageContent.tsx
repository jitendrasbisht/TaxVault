import { ComplianceDashboardContent } from "./ComplianceDashboardContent";
import { ComplianceTaskTable } from "./ComplianceTaskTable";

export function CompliancePageContent() {
  return (
    <div className="space-y-8">
      <ComplianceDashboardContent />

      <ComplianceTaskTable />
    </div>
  );
}