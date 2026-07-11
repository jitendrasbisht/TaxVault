import {
  Briefcase,
  FileText,
  IndianRupee,
  ShieldCheck,
} from "lucide-react";

import { ReportStatCard } from "./ReportStatCard";
import { useExecutiveDashboard } from "../hooks/useExecutiveDashboard";

export function ExecutiveDashboard() {
  const { metrics } = useExecutiveDashboard();

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <ReportStatCard
        title={metrics[0]?.title ?? ""}
        value={metrics[0]?.value ?? ""}
        change={metrics[0]?.change}
        trend={metrics[0]?.trend}
        icon={<IndianRupee className="h-7 w-7" />}
        colorClass="text-emerald-600"
      />

      <ReportStatCard
        title={metrics[1]?.title ?? ""}
        value={metrics[1]?.value ?? ""}
        change={metrics[1]?.change}
        trend={metrics[1]?.trend}
        icon={<Briefcase className="h-7 w-7" />}
        colorClass="text-blue-600"
      />

      <ReportStatCard
        title={metrics[2]?.title ?? ""}
        value={metrics[2]?.value ?? ""}
        change={metrics[2]?.change}
        trend={metrics[2]?.trend}
        icon={<ShieldCheck className="h-7 w-7" />}
        colorClass="text-violet-600"
      />

      <ReportStatCard
        title={metrics[3]?.title ?? ""}
        value={metrics[3]?.value ?? ""}
        change={metrics[3]?.change}
        trend={metrics[3]?.trend}
        icon={<FileText className="h-7 w-7" />}
        colorClass="text-amber-600"
      />
    </div>
  );
}