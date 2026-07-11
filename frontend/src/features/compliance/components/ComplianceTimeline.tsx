import { Card } from "@/components/ui/Card";

import { ComplianceTimelineItem } from "../types";

interface ComplianceTimelineProps {
  items: ComplianceTimelineItem[];
}

export function ComplianceTimeline({
  items,
}: ComplianceTimelineProps) {
  return (
    <Card className="p-6">
      <h2 className="mb-6 text-lg font-semibold">
        Timeline
      </h2>

      {items.length === 0 ? (
        <p className="text-sm text-slate-500">
          No timeline available.
        </p>
      ) : (
        <div className="space-y-5">
          {items.map((item) => (
            <div
              key={item.id}
              className="border-l-2 border-slate-300 pl-4"
            >
              <h3 className="font-medium">{item.title}</h3>

              <p className="mt-1 text-sm text-slate-500">
                {item.description}
              </p>

              <p className="mt-2 text-xs text-slate-400">
                {item.createdBy} • {item.createdAt}
              </p>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}