import { ComplianceAssigneeFilter } from "./ComplianceAssigneeFilter";
import { ComplianceClientFilter } from "./ComplianceClientFilter";
import { CompliancePriorityFilter } from "./CompliancePriorityFilter";
import { ComplianceSearchBar } from "./ComplianceSearchBar";
import { ComplianceStatusFilter } from "./ComplianceStatusFilter";

interface ComplianceFilterPanelProps {
  search: string;
  client: string;
  assignee: string;
  status: string;
  priority: string;

  clients: string[];
  assignees: string[];

  onSearchChange: (value: string) => void;
  onClientChange: (value: string) => void;
  onAssigneeChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onPriorityChange: (value: string) => void;
}

export function ComplianceFilterPanel({
  search,
  client,
  assignee,
  status,
  priority,
  clients,
  assignees,
  onSearchChange,
  onClientChange,
  onAssigneeChange,
  onStatusChange,
  onPriorityChange,
}: ComplianceFilterPanelProps) {
  return (
    <div className="flex flex-wrap gap-4 rounded-lg border border-slate-200 bg-white p-4">
      <ComplianceSearchBar
        value={search}
        onChange={onSearchChange}
      />

      <ComplianceClientFilter
        clients={clients}
        value={client}
        onChange={onClientChange}
      />

      <ComplianceAssigneeFilter
        users={assignees}
        value={assignee}
        onChange={onAssigneeChange}
      />

      <ComplianceStatusFilter
        value={status}
        onChange={onStatusChange}
      />

      <CompliancePriorityFilter
        value={priority}
        onChange={onPriorityChange}
      />
    </div>
  );
}