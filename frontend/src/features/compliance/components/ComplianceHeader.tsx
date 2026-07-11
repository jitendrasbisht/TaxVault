import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";

interface ComplianceHeaderProps {
  onAdd: () => void;
}

export function ComplianceHeader({
  onAdd,
}: ComplianceHeaderProps) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <PageHeader
        title="Compliance Management"
        description="Manage statutory compliance, due dates and recurring tasks."
      />

      <Button onClick={onAdd}>
        Add Compliance
      </Button>
    </div>
  );
}