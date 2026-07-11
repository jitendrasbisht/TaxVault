interface ComplianceTaskHeaderProps {
  title: string;
  description: string;
}

export function ComplianceTaskHeader({
  title,
  description,
}: ComplianceTaskHeaderProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold text-slate-900">
        {title}
      </h2>

      <p className="text-sm text-slate-500">
        {description}
      </p>
    </div>
  );
}