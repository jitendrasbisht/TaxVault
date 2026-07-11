import {
  CircleCheck,
  Database,
  Server,
  ShieldCheck,
} from "lucide-react";

import { Card } from "@/components/ui/Card";

const systems = [
  {
    icon: <Database className="h-5 w-5 text-blue-600" />,
    title: "Database",
    status: "Operational",
  },
  {
    icon: <Server className="h-5 w-5 text-emerald-600" />,
    title: "API Services",
    status: "Healthy",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-violet-600" />,
    title: "Compliance Engine",
    status: "Running",
  },
];

export function SystemHealth() {
  return (
    <Card className="p-6">
      <h3 className="mb-6 text-lg font-semibold">
        System Health
      </h3>

      <div className="space-y-4">
        {systems.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              {item.icon}

              <span>{item.title}</span>
            </div>

            <div className="flex items-center gap-2 text-emerald-600">
              <CircleCheck className="h-4 w-4" />

              <span className="text-sm">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}