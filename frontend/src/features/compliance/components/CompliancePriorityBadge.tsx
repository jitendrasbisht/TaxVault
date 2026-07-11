import { Badge } from "@/components/ui/Badge";

import { CompliancePriority } from "../types";

interface CompliancePriorityBadgeProps {
  priority: CompliancePriority;
}

const variantMap: Record<
  CompliancePriority,
  "default" | "success" | "warning" | "danger"
> = {
  Low: "success",
  Medium: "default",
  High: "warning",
  Critical: "danger",
};

export function CompliancePriorityBadge({
  priority,
}: CompliancePriorityBadgeProps) {
  return <Badge variant={variantMap[priority]}>{priority}</Badge>;
}