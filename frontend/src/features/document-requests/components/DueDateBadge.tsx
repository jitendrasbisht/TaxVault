import { CalendarDays } from "lucide-react";

interface DueDateBadgeProps {
  dueDate: string;
}

export function DueDateBadge({
  dueDate,
}: DueDateBadgeProps) {
  const today = new Date();

  const due =
    new Date(dueDate);

  const overdue =
    due.getTime() <
    today.getTime();

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${
        overdue
          ? "bg-red-100 text-red-700"
          : "bg-emerald-100 text-emerald-700"
      }`}
    >
      <CalendarDays size={14} />

      {due.toLocaleDateString()}
    </span>
  );
}
