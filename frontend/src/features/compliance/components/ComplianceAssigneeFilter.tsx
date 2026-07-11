interface ComplianceAssigneeFilterProps {
  users: string[];
  value: string;
  onChange: (value: string) => void;
}

export function ComplianceAssigneeFilter({
  users,
  value,
  onChange,
}: ComplianceAssigneeFilterProps) {
  return (
    <select
      className="rounded-md border border-slate-300 px-3 py-2 text-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">All Assignees</option>

      {users.map((user) => (
        <option key={user} value={user}>
          {user}
        </option>
      ))}
    </select>
  );
}