import { Badge } from "@/components/ui/Badge";

import { ComplianceStatus } from "../types";

interface ComplianceStatusBadgeProps {
  status: ComplianceStatus;
}

const variantMap: Record<
  ComplianceStatus,
  "default" | "success" | "warning" | "danger"
> = {
  Pending: "warning",
  "In Progress": "default",
  Completed: "success",
  Overdue: "danger",
};

export function ComplianceStatusBadge({
  status,
}: ComplianceStatusBadgeProps) {
  return <Badge variant={variantMap[status]}>{status}</Badge>;
}