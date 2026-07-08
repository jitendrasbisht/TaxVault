interface ClientSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function ClientSearch({
  value,
  onChange,
}: ClientSearchProps) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search by name, email or PAN..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none transition focus:border-blue-500"
      />
    </div>
  );
}