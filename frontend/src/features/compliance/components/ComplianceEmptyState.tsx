import { EmptyState } from "@/components/ui/EmptyState";

export function ComplianceEmptyState() {
  return (
    <EmptyState
      title="No Compliance Found"
      description="No compliance records match the current filters."
    />
  );
}