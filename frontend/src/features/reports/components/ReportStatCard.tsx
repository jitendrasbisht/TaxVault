import { ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Minus,
} from "lucide-react";

import { Card } from "@/components/ui/Card";

interface ReportStatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  change?: number;
  trend?: "up" | "down" | "neutral";
  colorClass?: string;
}

export function ReportStatCard({
  title,
  value,
  icon,
  change,
  trend = "neutral",
  colorClass = "text-slate-600",
}: ReportStatCardProps) {
  return (
    <Card className="group p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            {title}
          </p>

          <p className="mt-3 text-4xl font-bold text-slate-900">
            {value}
          </p>

          {change !== undefined && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
              {trend === "up" && (
                <ArrowUpRight className="h-4 w-4 text-emerald-600" />
              )}

              {trend === "down" && (
                <ArrowDownRight className="h-4 w-4 text-red-600" />
              )}

              {trend === "neutral" && (
                <Minus className="h-4 w-4 text-slate-500" />
              )}

              <span
                className={`text-xs font-semibold ${
                  trend === "up"
                    ? "text-emerald-600"
                    : trend === "down"
                    ? "text-red-600"
                    : "text-slate-600"
                }`}
              >
                {change}%
              </span>
            </div>
          )}
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 transition-colors group-hover:bg-slate-200 ${colorClass}`}
        >
          {icon}
        </div>
      </div>
    </Card>
  );
}