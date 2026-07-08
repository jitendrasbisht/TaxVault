import { useState } from "react";
import { cn } from "../../lib/cn";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export function Tabs({ tabs }: TabsProps) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="mb-4 flex border-b border-slate-200">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActive(index)}
            className={cn(
              "px-4 py-2 text-sm font-medium",
              active === index
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-slate-500 hover:text-slate-900"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>{tabs[active].content}</div>
    </div>
  );
}