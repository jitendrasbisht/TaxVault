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
        icon={<IndianRupee className="h-6 w-6" />}
        colorClass="text-emerald-600"
      />

      <ReportStatCard
        title={metrics[1]?.title ?? ""}
        value={metrics[1]?.value ?? ""}
        icon={<Briefcase className="h-6 w-6" />}
        colorClass="text-blue-600"
      />

      <ReportStatCard
        title={metrics[2]?.title ?? ""}
        value={metrics[2]?.value ?? ""}
        icon={<ShieldCheck className="h-6 w-6" />}
        colorClass="text-violet-600"
      />

      <ReportStatCard
        title={metrics[3]?.title ?? ""}
        value={metrics[3]?.value ?? ""}
        icon={<FileText className="h-6 w-6" />}
        colorClass="text-amber-600"
      />
    </div>
  );
}