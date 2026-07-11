import { Bell } from "lucide-react";

import { Card } from "@/components/ui/Card";

interface ComplianceReminderCardProps {
  title: string;
  dueDate: string;
}

export function ComplianceReminderCard({
  title,
  dueDate,
}: ComplianceReminderCardProps) {
  return (
    <Card className="flex items-center gap-4 p-5">
      <Bell className="h-8 w-8 text-amber-500" />

      <div>
        <p className="font-semibold">{title}</p>

        <p className="text-sm text-slate-500">
          Due: {dueDate}
        </p>
      </div>
    </Card>
  );
}