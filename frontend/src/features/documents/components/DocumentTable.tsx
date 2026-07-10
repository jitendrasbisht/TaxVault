import { Eye } from "lucide-react";

import { Button } from "@/components/ui/Button";

import { Document } from "../types/document";

interface DocumentTableProps {
  documents: Document[];
}

export function DocumentTable({
  documents,
}: DocumentTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              Document
            </th>

            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              Client
            </th>

            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              Category
            </th>

            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              Status
            </th>

            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              Version
            </th>

            <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-200 bg-white">
          {documents.map((document) => (
            <tr
              key={document.id}
              className="hover:bg-slate-50"
            >
              <td className="px-4 py-4">
                <div className="font-medium">
                  {document.name}
                </div>

                <div className="text-xs text-slate-500">
                  {document.fileType}
                </div>
              </td>

              <td className="px-4 py-4">
                {document.clientName}
              </td>

              <td className="px-4 py-4">
                {document.category}
              </td>

              <td className="px-4 py-4">
                {document.status}
              </td>

              <td className="px-4 py-4">
                v{document.version}
              </td>

              <td className="px-4 py-4 text-right">
                <Button
                  size="sm"
                  variant="outline"
                >
                  <Eye
                    size={16}
                    className="mr-2"
                  />
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}