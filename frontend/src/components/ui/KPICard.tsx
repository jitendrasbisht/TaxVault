import type { LucideIcon } from "lucide-react";
import { Card } from "./Card";

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

function KPICard({
  title,
  value,
  change,
  icon: Icon,
}: KPICardProps) {
  const isPositive = change.startsWith("+");

  return (
    <Card>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-500">
            {title}
          </h3>

          <Icon className="text-slate-400" size={20} />
        </div>

        <p className="text-4xl font-bold text-slate-900">
          {value}
        </p>

        <p
          className={`text-sm font-medium ${
            isPositive ? "text-emerald-600" : "text-red-600"
          }`}
        >
          {change} this month
        </p>
      </div>
    </Card>
  );
}

export default KPICard;