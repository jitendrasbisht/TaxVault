import { ReactNode } from "react";

import { Card } from "@/components/ui/Card";

interface ComplianceKPICardProps {
  title: string;
  value: number | string;
  subtitle?: string;
  icon?: ReactNode;
}

export function ComplianceKPICard({
  title,
  value,
  subtitle,
  icon,
}: ComplianceKPICardProps) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {value}
          </h3>

          {subtitle && (
            <p className="mt-2 text-xs text-slate-500">
              {subtitle}
            </p>
          )}
        </div>

        {icon && (
          <div className="rounded-lg bg-slate-100 p-3">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}