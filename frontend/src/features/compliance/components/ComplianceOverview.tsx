import { ComplianceDashboardContent } from "./ComplianceDashboardContent";
import { ComplianceHeader } from "./ComplianceHeader";

interface ComplianceOverviewProps {
  onAdd: () => void;
}

export function ComplianceOverview({
  onAdd,
}: ComplianceOverviewProps) {
  return (
    <div className="space-y-8">
      <ComplianceHeader onAdd={onAdd} />

      <ComplianceDashboardContent />
    </div>
  );
}