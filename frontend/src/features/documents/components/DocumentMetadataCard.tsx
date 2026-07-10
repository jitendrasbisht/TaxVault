import { Document } from "../types/document";

interface DocumentMetadataCardProps {
  document: Document;
}

export function DocumentMetadataCard({
  document,
}: DocumentMetadataCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-5 text-lg font-semibold text-slate-900">
        Document Metadata
      </h3>

      <div className="space-y-4">

        <MetadataRow
          label="Category"
          value={document.category}
        />

        <MetadataRow
          label="Status"
          value={document.status}
        />

        <MetadataRow
          label="Version"
          value={`v${document.version}`}
        />

        <MetadataRow
          label="File Type"
          value={document.fileType}
        />

        <MetadataRow
          label="Client"
          value={document.clientName}
        />

      </div>
    </div>
  );
}

interface MetadataRowProps {
  label: string;
  value: string;
}

function MetadataRow({
  label,
  value,
}: MetadataRowProps) {
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

export default DocumentMetadataCard;