import {
  RequestPriority,
  RequestStatus,
} from "../types/request";

const statusClasses: Record<
  RequestStatus,
  string
> = {
  DRAFT:
    "bg-slate-100 text-slate-700",
  SENT:
    "bg-blue-100 text-blue-700",
  PARTIALLY_RECEIVED:
    "bg-amber-100 text-amber-700",
  COMPLETED:
    "bg-green-100 text-green-700",
  OVERDUE:
    "bg-red-100 text-red-700",
  CANCELLED:
    "bg-slate-200 text-slate-600",
};

const priorityClasses: Record<
  RequestPriority,
  string
> = {
  LOW:
    "bg-slate-100 text-slate-700",
  MEDIUM:
    "bg-blue-100 text-blue-700",
  HIGH:
    "bg-orange-100 text-orange-700",
  URGENT:
    "bg-red-100 text-red-700",
};

interface Props {
  status: RequestStatus;
  priority: RequestPriority;
}

export function RequestBadges({
  status,
  priority,
}: Props) {
  return (
    <div className="flex gap-2">
      <span
        className={`rounded-full px-2 py-1 text-xs font-medium ${statusClasses[status]}`}
      >
        {status.replaceAll("_", " ")}
      </span>

      <span
        className={`rounded-full px-2 py-1 text-xs font-medium ${priorityClasses[priority]}`}
      >
        {priority}
      </span>
    </div>
  );
}
