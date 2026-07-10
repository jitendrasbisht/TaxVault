import { useEffect, useRef, useState } from "react";
import { ChevronDown, MoreVertical } from "lucide-react";

interface DropdownItem {
  label: string;
  onClick: () => void;
}

interface DropdownProps {
  items: DropdownItem[];
  label?: string;
}

export function Dropdown({
  items,
  label,
}: DropdownProps) {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClick,
      );
  }, []);

  return (
    <div
      ref={ref}
      className="relative inline-flex"
    >
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className={
          label
            ? "flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-slate-50"
            : "rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
        }
      >
        {label ? (
          <>
            {label}

            <ChevronDown
              size={16}
              className={`transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </>
        ) : (
          <MoreVertical size={18} />
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
          {items.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                item.onClick();
                setOpen(false);
              }}
              className="block w-full px-4 py-2.5 text-left text-sm text-slate-700 transition hover:bg-slate-100"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}