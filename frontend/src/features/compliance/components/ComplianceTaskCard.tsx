import { Card } from "@/components/ui/Card";

import { ComplianceTask } from "../types";
import { CompliancePriorityBadge } from "./CompliancePriorityBadge";
import { ComplianceStatusBadge } from "./ComplianceStatusBadge";

interface ComplianceTaskCardProps {
  task: ComplianceTask;
}

export function ComplianceTaskCard({
  task,
}: ComplianceTaskCardProps) {
  return (
    <Card className="space-y-4 p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{task.title}</h3>

        <CompliancePriorityBadge
          priority={task.priority}
        />
      </div>

      <p className="text-sm text-slate-500">
        {task.description}
      </p>

      <div className="flex items-center justify-between">
        <ComplianceStatusBadge status={task.status} />

        <span className="text-sm text-slate-500">
          {task.dueDate}
        </span>
      </div>
    </Card>
  );
}