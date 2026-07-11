import { Badge } from "@/components/ui/Badge";

import { ComplianceFrequency } from "../types";

interface ComplianceFrequencyBadgeProps {
  frequency: ComplianceFrequency;
}

export function ComplianceFrequencyBadge({
  frequency,
}: ComplianceFrequencyBadgeProps) {
  return (
    <Badge variant="outline">
      {frequency}
    </Badge>
  );
}