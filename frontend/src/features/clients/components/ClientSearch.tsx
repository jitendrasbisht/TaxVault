import { Input } from "@/components/ui/Input";

interface ClientSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function ClientSearch({
  value,
  onChange,
}: ClientSearchProps) {
  return (
    <div className="max-w-md">
      <Input
        placeholder="Search by name, email or PAN..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}