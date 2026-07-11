import { ComplianceTask } from "../types";
import { ComplianceTaskCard } from "./ComplianceTaskCard";

interface ComplianceListProps {
  tasks: ComplianceTask[];
}

export function ComplianceList({
  tasks,
}: ComplianceListProps) {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <ComplianceTaskCard
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
}