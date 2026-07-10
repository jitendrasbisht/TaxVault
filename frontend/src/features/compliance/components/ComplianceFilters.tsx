import { Input } from "@/components/ui/Input";

import {
  CompliancePriority,
  ComplianceStatus,
} from "../types";

interface ComplianceFiltersProps {
  search: string;
  status?: ComplianceStatus;
  priority?: CompliancePriority;

  onSearchChange: (value: string) => void;
  onStatusChange: (value?: ComplianceStatus) => void;
  onPriorityChange: (value?: CompliancePriority) => void;
}

const statuses: ComplianceStatus[] = [
  "Pending",
  "In Progress",
  "Completed",
  "Overdue",
];

const priorities: CompliancePriority[] = [
  "Low",
  "Medium",
  "High",
  "Critical",
];

export function ComplianceFilters({
  search,
  status,
  priority,
  onSearchChange,
  onStatusChange,
  onPriorityChange,
}: ComplianceFiltersProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-4 md:flex-row">
      <Input
        className="md:w-80"
        placeholder="Search compliance..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select
        className="rounded-md border border-slate-300 px-3 py-2 text-sm"
        value={status ?? ""}
        onChange={(e) =>
          onStatusChange(
            e.target.value === ""
              ? undefined
              : (e.target.value as ComplianceStatus)
          )
        }
      >
        <option value="">All Status</option>

        {statuses.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <select
        className="rounded-md border border-slate-300 px-3 py-2 text-sm"
        value={priority ?? ""}
        onChange={(e) =>
          onPriorityChange(
            e.target.value === ""
              ? undefined
              : (e.target.value as CompliancePriority)
          )
        }
      >
        <option value="">All Priority</option>

        {priorities.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}