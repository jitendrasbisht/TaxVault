import { ComplianceTask } from "../types";
import { ComplianceMetadata } from "./ComplianceMetadata";
import { ComplianceTaskHeader } from "./ComplianceTaskHeader";

interface ComplianceTaskDetailsProps {
  task: ComplianceTask;
}

export function ComplianceTaskDetails({
  task,
}: ComplianceTaskDetailsProps) {
  return (
    <div className="space-y-6">
      <ComplianceTaskHeader
        title={task.title}
        description={task.description}
      />

      <ComplianceMetadata
        createdAt={task.createdAt}
        updatedAt={task.updatedAt}
      />
    </div>
  );
}