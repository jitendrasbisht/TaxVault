import { Card } from "@/components/ui/Card";

interface ComplianceInfoCardProps {
  label: string;
  value: string;
}

export function ComplianceInfoCard({
  label,
  value,
}: ComplianceInfoCardProps) {
  return (
    <Card className="p-4">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold text-slate-900">
        {value}
      </p>
    </Card>
  );
}