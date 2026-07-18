interface Props {
  priority: string;
}

const colors: Record<string, string> = {
  LOW: "bg-gray-100 text-gray-700",
  MEDIUM: "bg-blue-100 text-blue-700",
  HIGH: "bg-orange-100 text-orange-700",
  URGENT: "bg-red-100 text-red-700",
};

export default function CasePriorityBadge({ priority }: Props) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
        colors[priority] ?? "bg-gray-100 text-gray-700"
      }`}
    >
      {priority}
    </span>
  );
}
