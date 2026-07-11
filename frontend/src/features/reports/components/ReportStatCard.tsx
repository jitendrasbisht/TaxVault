import { ReactNode } from "react";

import { Card } from "@/components/ui/Card";

interface ReportStatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  colorClass?: string;
}

export function ReportStatCard({
  title,
  value,
  icon,
  colorClass = "text-slate-600",
}: ReportStatCardProps) {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>

          <p className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </p>
        </div>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 ${colorClass}`}
        >
          {icon}
        </div>
      </div>
    </Card>
  );
}