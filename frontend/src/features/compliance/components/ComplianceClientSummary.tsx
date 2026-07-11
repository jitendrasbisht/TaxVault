import { Card } from "@/components/ui/Card";

interface ComplianceClientSummaryProps {
  client: string;
  total: number;
}

export function ComplianceClientSummary({
  client,
  total,
}: ComplianceClientSummaryProps) {
  return (
    <Card className="p-5">
      <p className="text-sm text-slate-500">
        {client}
      </p>

      <p className="mt-3 text-3xl font-bold">
        {total}
      </p>

      <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">
        Active Compliance
      </p>
    </Card>
  );
}