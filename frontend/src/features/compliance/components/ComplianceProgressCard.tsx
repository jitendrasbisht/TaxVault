import { Card } from "@/components/ui/Card";

interface ComplianceProgressCardProps {
  title: string;
  completed: number;
  total: number;
}

export function ComplianceProgressCard({
  title,
  completed,
  total,
}: ComplianceProgressCardProps) {
  const progress =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>

        <span className="text-sm font-medium">
          {progress}%
        </span>
      </div>

      <div className="mt-4 h-2 rounded-full bg-slate-200">
        <div
          className="h-2 rounded-full bg-blue-600"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-3 text-sm text-slate-500">
        {completed} of {total} completed
      </p>
    </Card>
  );
}