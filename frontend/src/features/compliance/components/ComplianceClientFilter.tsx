interface ComplianceClientFilterProps {
  clients: string[];
  value: string;
  onChange: (value: string) => void;
}

export function ComplianceClientFilter({
  clients,
  value,
  onChange,
}: ComplianceClientFilterProps) {
  return (
    <select
      className="rounded-md border border-slate-300 px-3 py-2 text-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">All Clients</option>

      {clients.map((client) => (
        <option key={client} value={client}>
          {client}
        </option>
      ))}
    </select>
  );
}