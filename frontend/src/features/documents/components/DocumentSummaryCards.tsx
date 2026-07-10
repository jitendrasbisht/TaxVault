import {
  Archive,
  CheckCircle2,
  Clock3,
  FileText,
} from "lucide-react";

import {
  Document,
  DocumentStatus,
} from "../types/document";

interface DocumentSummaryCardsProps {
  documents: Document[];
}

interface SummaryCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
}

function SummaryCard({
  title,
  value,
  icon,
}: SummaryCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
            {value}
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-100 p-4 text-slate-700">
          {icon}
        </div>
      </div>
    </div>
  );
}

export function DocumentSummaryCards({
  documents,
}: DocumentSummaryCardsProps) {
  const totalDocuments =
    documents.length;

  const approvedDocuments =
    documents.filter(
      (document) =>
        document.status ===
        DocumentStatus.APPROVED,
    ).length;

  const pendingDocuments =
    documents.filter(
      (document) =>
        document.status ===
        DocumentStatus.PENDING_REVIEW,
    ).length;

  const draftDocuments =
    documents.filter(
      (document) =>
        document.status ===
        DocumentStatus.DRAFT,
    ).length;

  const archivedDocuments =
    documents.filter(
      (document) =>
        document.status ===
        DocumentStatus.ARCHIVED,
    ).length;

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5">
      <SummaryCard
        title="Total Documents"
        value={totalDocuments}
        icon={<FileText size={24} />}
      />

      <SummaryCard
        title="Approved"
        value={approvedDocuments}
        icon={<CheckCircle2 size={24} />}
      />

      <SummaryCard
        title="Pending Review"
        value={pendingDocuments}
        icon={<Clock3 size={24} />}
      />

      <SummaryCard
        title="Draft"
        value={draftDocuments}
        icon={<FileText size={24} />}
      />

      <SummaryCard
        title="Archived"
        value={archivedDocuments}
        icon={<Archive size={24} />}
      />
    </div>
  );
}