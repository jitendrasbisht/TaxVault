import { StatusBadge } from "@/components/ui/StatusBadge";
import { Client, ClientStatus } from "../types/client";

interface ClientTableProps {
  clients: Client[];
}

function getStatusVariant(
  status: ClientStatus
): "success" | "warning" | "danger" {
  switch (status) {
    case ClientStatus.ACTIVE:
      return "success";

    case ClientStatus.INACTIVE:
      return "warning";

    case ClientStatus.ARCHIVED:
      return "danger";
  }
}

function formatType(type: string) {
  return type.charAt(0) + type.slice(1).toLowerCase();
}

export function ClientTable({
  clients,
}: ClientTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              Name
            </th>

            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              Email
            </th>

            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              Phone
            </th>

            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              PAN
            </th>

            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              Type
            </th>

            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              Status
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100 bg-white">
          {clients.map((client) => (
            <tr
              key={client.id}
              className="transition hover:bg-slate-50"
            >
              <td className="px-6 py-4 font-medium text-slate-900">
                {client.name}
              </td>

              <td className="px-6 py-4 text-slate-600">
                {client.email}
              </td>

              <td className="px-6 py-4 text-slate-600">
                {client.phone}
              </td>

              <td className="px-6 py-4 font-mono text-sm">
                {client.pan}
              </td>

              <td className="px-6 py-4">
                {formatType(client.type)}
              </td>

              <td className="px-6 py-4">
                <StatusBadge
                  status={getStatusVariant(client.status)}
                >
                  {formatType(client.status)}
                </StatusBadge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}