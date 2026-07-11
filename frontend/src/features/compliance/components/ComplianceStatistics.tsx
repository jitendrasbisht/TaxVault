import { Card } from "@/components/ui/Card";

interface ComplianceStatisticsProps {
  title: string;
  value: number;
}

export function ComplianceStatistics({
  title,
  value,
}: ComplianceStatisticsProps) {
  return (
    <Card className="p-5">
      <p className="text-sm text-slate-500">{title}</p>

      <p className="mt-3 text-3xl font-bold">
        {value}
      </p>
    </Card>
  );
}