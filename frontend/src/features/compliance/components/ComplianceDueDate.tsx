interface ComplianceDueDateProps {
  dueDate: string;
}

export function ComplianceDueDate({
  dueDate,
}: ComplianceDueDateProps) {
  return (
    <span className="text-sm text-slate-600">
      {new Date(dueDate).toLocaleDateString()}
    </span>
  );
}