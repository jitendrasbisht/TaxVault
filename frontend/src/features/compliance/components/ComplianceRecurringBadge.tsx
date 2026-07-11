import { Badge } from "@/components/ui/Badge";

interface ComplianceRecurringBadgeProps {
  recurring: boolean;
}

export function ComplianceRecurringBadge({
  recurring,
}: ComplianceRecurringBadgeProps) {
  return (
    <Badge variant={recurring ? "success" : "outline"}>
      {recurring ? "Recurring" : "One Time"}
    </Badge>
  );
}