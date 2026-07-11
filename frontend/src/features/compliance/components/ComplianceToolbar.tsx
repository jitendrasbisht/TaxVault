import { Button } from "@/components/ui/Button";

import { ComplianceSearchBar } from "./ComplianceSearchBar";

interface ComplianceToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  onAdd: () => void;
}

export function ComplianceToolbar({
  search,
  onSearchChange,
  onAdd,
}: ComplianceToolbarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-4 md:flex-row md:items-center md:justify-between">
      <ComplianceSearchBar
        value={search}
        onChange={onSearchChange}
      />

      <Button onClick={onAdd}>
        Add Compliance
      </Button>
    </div>
  );
}