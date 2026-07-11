import { Card } from "@/components/ui/Card";

interface ComplianceMiniCardProps {
  title: string;
  value: string | number;
}

export function ComplianceMiniCard({
  title,
  value,
}: ComplianceMiniCardProps) {
  return (
    <Card className="p-4">
      <p className="text-xs uppercase tracking-wide text-slate-500">
        {title}
      </p>

      <p className="mt-2 text-xl font-semibold">
        {value}
      </p>
    </Card>
  );
}