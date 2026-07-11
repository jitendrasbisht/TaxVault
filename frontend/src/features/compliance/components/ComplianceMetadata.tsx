interface ComplianceMetadataProps {
  createdAt: string;
  updatedAt: string;
}

export function ComplianceMetadata({
  createdAt,
  updatedAt,
}: ComplianceMetadataProps) {
  return (
    <div className="grid gap-4 rounded-lg border border-slate-200 p-4 md:grid-cols-2">
      <div>
        <p className="text-xs uppercase text-slate-500">
          Created
        </p>

        <p className="mt-1 text-sm font-medium">
          {createdAt}
        </p>
      </div>

      <div>
        <p className="text-xs uppercase text-slate-500">
          Last Updated
        </p>

        <p className="mt-1 text-sm font-medium">
          {updatedAt}
        </p>
      </div>
    </div>
  );
}