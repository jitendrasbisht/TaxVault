import { CompliancePriority } from "../types";

interface CompliancePriorityFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const priorities: CompliancePriority[] = [
  "Low",
  "Medium",
  "High",
  "Critical",
];

export function CompliancePriorityFilter({
  value,
  onChange,
}: CompliancePriorityFilterProps) {
  return (
    <select
      className="rounded-md border border-slate-300 px-3 py-2 text-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">All Priority</option>

      {priorities.map((priority) => (
        <option key={priority} value={priority}>
          {priority}
        </option>
      ))}
    </select>
  );
}