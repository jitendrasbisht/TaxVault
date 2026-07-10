import { Document } from "../types/document";

interface DocumentVersionHistoryProps {
  document: Document;
}

export default function DocumentVersionHistory({
  document,
}: DocumentVersionHistoryProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold text-slate-900">
        Version History
      </h2>

      <div className="space-y-4">

        <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
          <div>
            <p className="font-medium">
              Version {document.version}
            </p>

            <p className="text-sm text-slate-500">
              Current Version
            </p>
          </div>

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            Active
          </span>
        </div>

      </div>
    </div>
  );
}