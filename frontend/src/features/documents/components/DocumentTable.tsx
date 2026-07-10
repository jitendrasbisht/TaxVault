import {
  Edit,
  Eye,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/Button";

import { Document } from "../types/document";

import { DocumentStatusBadge } from "./DocumentStatusBadge";

interface DocumentTableProps {
  documents: Document[];

  onEdit?: (
    document: Document,
  ) => void;

  onDelete?: (
    document: Document,
  ) => void;
}

export function DocumentTable({
  documents,
  onEdit,
  onDelete,
}: DocumentTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200">

      <table className="min-w-full divide-y divide-slate-200">

        <thead className="bg-slate-50">

          <tr>

            <th className="px-4 py-3 text-left text-xs font-semibold uppercase">
              Document
            </th>

            <th className="px-4 py-3 text-left text-xs font-semibold uppercase">
              Client
            </th>

            <th className="px-4 py-3 text-left text-xs font-semibold uppercase">
              Category
            </th>

            <th className="px-4 py-3 text-left text-xs font-semibold uppercase">
              Status
            </th>

            <th className="px-4 py-3 text-left text-xs font-semibold uppercase">
              Version
            </th>

            <th className="px-4 py-3 text-right text-xs font-semibold uppercase">
              Actions
            </th>

          </tr>

        </thead>

        <tbody className="divide-y divide-slate-200 bg-white">

          {documents.map(
            (document) => (
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
                  <DocumentStatusBadge
                    status={
                      document.status
                    }
                  />
                </td>

                <td className="px-4 py-4">
                  v{document.version}
                </td>

                <td className="px-4 py-4">

                  <div className="flex justify-end gap-2">

                    <Button
                      size="sm"
                      variant="outline"
                    >
                      <Eye size={16} />
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        onEdit?.(
                          document,
                        )
                      }
                    >
                      <Edit
                        size={16}
                      />
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        onDelete?.(
                          document,
                        )
                      }
                    >
                      <Trash2
                        size={16}
                      />
                    </Button>

                  </div>

                </td>

              </tr>
            ),
          )}

        </tbody>

      </table>

    </div>
  );
}