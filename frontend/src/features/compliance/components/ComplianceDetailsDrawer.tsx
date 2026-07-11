import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

import { ComplianceTask } from "../types";

interface ComplianceDetailsDrawerProps {
  task?: ComplianceTask;
}

export function ComplianceDetailsDrawer({
  task,
}: ComplianceDetailsDrawerProps) {
  if (!task) return null;

  return (
    <Card className="space-y-5 p-6">
      <div>
        <h2 className="text-xl font-semibold">
          {task.title}
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          {task.description}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="font-medium">Client</span>
          <p>{task.clientName}</p>
        </div>

        <div>
          <span className="font-medium">Assigned To</span>
          <p>{task.assignedTo}</p>
        </div>

        <div>
          <span className="font-medium">Due Date</span>
          <p>{task.dueDate}</p>
        </div>

        <div>
          <span className="font-medium">Frequency</span>
          <p>{task.frequency}</p>
        </div>
      </div>

      <div className="flex gap-3">
        <Badge>{task.priority}</Badge>
        <Badge>{task.status}</Badge>
      </div>
    </Card>
  );
}