import { Plus, Search } from "lucide-react";

interface RequestToolbarProps {
  search: string;
  onSearchChange: (
    value: string,
  ) => void;
  onAddRequest: () => void;
}

export function RequestToolbar({
  search,
  onSearchChange,
  onAddRequest,
}: RequestToolbarProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="relative w-full md:max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />

        <input
          value={search}
          onChange={(event) =>
            onSearchChange(
              event.target.value,
            )
          }
          placeholder="Search requests..."
          className="w-full rounded-lg border bg-background py-2 pl-10 pr-4 outline-none transition focus:ring-2"
        />
      </div>

      <button
        type="button"
        onClick={onAddRequest}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
      >
        <Plus size={18} />
        New Request
      </button>
    </div>
  );
}
