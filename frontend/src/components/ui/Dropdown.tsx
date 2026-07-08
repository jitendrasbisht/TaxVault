import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownItem {
  label: string;
  onClick: () => void;
}

interface DropdownProps {
  label: string;
  items: DropdownItem[];
}

export function Dropdown({
  label,
  items,
}: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-50"
      >
        {label}
        <ChevronDown className="h-4 w-4" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-md border bg-white shadow-lg">
          {items.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                item.onClick();
                setOpen(false);
              }}
              className="block w-full px-4 py-2 text-left text-sm hover:bg-slate-100"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}