import { Badge } from "@/components/ui/Badge";

export function ComplianceLegend() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge variant="success">Completed</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="default">In Progress</Badge>
      <Badge variant="danger">Overdue</Badge>
    </div>
  );
}