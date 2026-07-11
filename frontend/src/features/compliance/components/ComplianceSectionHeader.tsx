interface ComplianceSectionHeaderProps {
  title: string;
  description?: string;
}

export function ComplianceSectionHeader({
  title,
  description,
}: ComplianceSectionHeaderProps) {
  return (
    <div className="mb-5">
      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      {description && (
        <p className="mt-1 text-sm text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}