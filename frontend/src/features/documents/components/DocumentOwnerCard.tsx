import { Document } from "../types/document";

interface DocumentOwnerCardProps {
  document: Document;
}

export function DocumentOwnerCard({
  document,
}: DocumentOwnerCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-5 text-lg font-semibold text-slate-900">
        Owner Information
      </h3>

      <div className="space-y-4">

        <OwnerRow
          label="Uploaded By"
          value={document.uploadedBy}
        />

        <OwnerRow
          label="Uploaded"
          value={new Date(
            document.uploadedAt,
          ).toLocaleDateString()}
        />

        <OwnerRow
          label="Updated"
          value={new Date(
            document.updatedAt,
          ).toLocaleDateString()}
        />

        <OwnerRow
          label="File Size"
          value={`${document.fileSize} KB`}
        />

      </div>
    </div>
  );
}

interface OwnerRowProps {
  label: string;
  value: string;
}

function OwnerRow({
  label,
  value,
}: OwnerRowProps) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
      <span className="text-sm text-slate-500">
        {label}
      </span>

      <span className="font-medium text-slate-900">
        {value}
      </span>
    </div>
  );
}

export default DocumentOwnerCard;