import {
  Pencil,
  Trash2,
} from "lucide-react";

import { RequestBadges } from "./RequestBadges";

import {
  DocumentRequest,
} from "../types/request";

interface RequestTableProps {
  requests: DocumentRequest[];
  onEdit?: (
    request: DocumentRequest,
  ) => void;
  onDelete?: (
    request: DocumentRequest,
  ) => void;
}

export function RequestTable({
  requests,
  onEdit,
  onDelete,
}: RequestTableProps) {
  if (!requests.length) {
    return (
      <div className="rounded-lg border bg-card p-10 text-center">
        <p className="text-muted-foreground">
          No document requests found.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border bg-card">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-muted/40">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Client
              </th>

              <th className="px-4 py-3 text-left text-sm font-semibold">
                Request
              </th>

              <th className="px-4 py-3 text-left text-sm font-semibold">
                Status
              </th>

              <th className="px-4 py-3 text-left text-sm font-semibold">
                Due Date
              </th>

              <th className="px-4 py-3 text-left text-sm font-semibold">
                Requested By
              </th>

              <th className="px-4 py-3 text-center text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {requests.map((request) => (
              <tr
                key={request.id}
                className="border-t hover:bg-muted/40"
              >
                <td className="px-4 py-3 font-medium">
                  {request.clientName}
                </td>

                <td className="px-4 py-3">
                  <div className="font-medium">
                    {request.title}
                  </div>

                  <div className="mt-1 text-xs text-muted-foreground">
                    {request.requestedDocuments.length}
                    {" "}documents requested
                  </div>
                </td>

                <td className="px-4 py-3">
                  <RequestBadges
                    status={request.status}
                    priority={request.priority}
                  />
                </td>

                <td className="px-4 py-3">
                  {request.dueDate}
                </td>

                <td className="px-4 py-3">
                  {request.requestedBy}
                </td>

                <td className="px-4 py-3">
                  <div className="flex justify-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        onEdit?.(request)
                      }
                      className="rounded-md border p-2 hover:bg-muted"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        onDelete?.(request)
                      }
                      className="rounded-md border p-2 hover:bg-destructive/10"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
