import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  ListTodo,
  Loader2,
  PlayCircle,
} from "lucide-react";

import { ComplianceStatCard } from "./ComplianceStatCard";
import { useComplianceDashboard } from "../hooks/useComplianceDashboard";

export function ComplianceDashboard() {
  const { stats, loading } = useComplianceDashboard();

  if (loading || !stats) {
    return (
      <div className="flex h-48 items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-slate-500" />
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
      <ComplianceStatCard
        title="Total Tasks"
        value={stats.total}
        icon={<ListTodo className="h-6 w-6" />}
        colorClass="text-slate-700"
      />

      <ComplianceStatCard
        title="Pending"
        value={stats.pending}
        icon={<Clock3 className="h-6 w-6" />}
        colorClass="text-amber-600"
      />

      <ComplianceStatCard
        title="In Progress"
        value={stats.inProgress}
        icon={<PlayCircle className="h-6 w-6" />}
        colorClass="text-blue-600"
      />

      <ComplianceStatCard
        title="Completed"
        value={stats.completed}
        icon={<CheckCircle2 className="h-6 w-6" />}
        colorClass="text-emerald-600"
      />

      <ComplianceStatCard
        title="Overdue"
        value={stats.overdue}
        icon={<AlertTriangle className="h-6 w-6" />}
        colorClass="text-red-600"
      />
    </div>
  );
}