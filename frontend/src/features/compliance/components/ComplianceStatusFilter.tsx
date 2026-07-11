import { ComplianceStatus } from "../types";

interface ComplianceStatusFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const statuses: ComplianceStatus[] = [
  "Pending",
  "In Progress",
  "Completed",
  "Overdue",
];

export function ComplianceStatusFilter({
  value,
  onChange,
}: ComplianceStatusFilterProps) {
  return (
    <select
      className="rounded-md border border-slate-300 px-3 py-2 text-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">All Status</option>

      {statuses.map((status) => (
        <option key={status} value={status}>
          {status}
        </option>
      ))}
    </select>
  );
}