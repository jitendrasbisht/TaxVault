import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const highlights = [
  "Revenue increased 12.4% this month",
  "17 new clients onboarded",
  "96% compliance achieved",
  "382 new documents uploaded",
];

export function BusinessHighlights() {
  return (
    <Card className="p-6">
      <h3 className="mb-6 text-lg font-semibold">
        Business Highlights
      </h3>

      <div className="space-y-4">
        {highlights.map((item) => (
          <div
            key={item}
            className="flex items-start justify-between gap-3"
          >
            <span className="text-sm">
              {item}
            </span>

            <Badge>New</Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}