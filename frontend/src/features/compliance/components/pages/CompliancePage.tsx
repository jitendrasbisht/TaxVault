import { PageHeader } from "@/components/ui/PageHeader";

import { ComplianceDashboard } from "../ComplianceDashboard";
import { ComplianceTaskTable } from "../ComplianceTaskTable";

export function CompliancePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Compliance & Task Management"
        description="Manage compliance tasks, due dates, priorities and recurring activities."
      />

      <ComplianceDashboard />

      <ComplianceTaskTable />
    </div>
  );
}