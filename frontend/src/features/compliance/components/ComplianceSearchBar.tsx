import { Input } from "@/components/ui/Input";

interface ComplianceSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function ComplianceSearchBar({
  value,
  onChange,
}: ComplianceSearchBarProps) {
  return (
    <Input
      className="max-w-md"
      placeholder="Search compliance, client, assignee..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}