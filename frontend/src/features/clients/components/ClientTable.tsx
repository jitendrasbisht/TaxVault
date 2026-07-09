import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
} from "lucide-react";

import { StatusBadge } from "@/components/ui/StatusBadge";

import {
  Client,
  ClientStatus,
} from "../types/client";
import {
  ClientSortDirection,
  ClientSortField,
} from "./ClientSearch";

interface ClientTableProps {
  clients: Client[];
  sortBy: ClientSortField;
  sortDirection: ClientSortDirection;
  onSort: (field: ClientSortField) => void;
}

function getStatusVariant(
  status: ClientStatus,
): "success" | "warning" | "danger" {
  switch (status) {
    case ClientStatus.ACTIVE:
      return "success";

    case ClientStatus.INACTIVE:
      return "warning";

    case ClientStatus.ARCHIVED:
      return "danger";

    default:
      return "warning";
  }
}

function formatValue(value: string) {
  return (
    value.charAt(0) +
    value.slice(1).toLowerCase()
  );
}

interface SortableHeaderProps {
  title: string;
  field: ClientSortField;
  sortBy: ClientSortField;
  sortDirection: ClientSortDirection;
  onSort: (field: ClientSortField) => void;
}

function SortableHeader({
  title,
  field,
  sortBy,
  sortDirection,
  onSort,
}: SortableHeaderProps) {
  const active = field === sortBy;

  return (
    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
      <button
        type="button"
        onClick={() => onSort(field)}
        className="flex items-center gap-2 transition hover:text-slate-900"
      >
        {title}

        {!active && (
          <ArrowUpDown
            size={14}
            className="text-slate-400"
          />
        )}

        {active &&
          (sortDirection === "asc" ? (
            <ArrowUp size={14} />
          ) : (
            <ArrowDown size={14} />
          ))}
      </button>
    </th>
  );
}

export function ClientTable({
  clients,
  sortBy,
  sortDirection,
  onSort,
}: ClientTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="sticky top-0 bg-slate-50">
            <tr className="border-b border-slate-200">
              <SortableHeader
                title="Name"
                field="name"
                sortBy={sortBy}
                sortDirection={sortDirection}
                onSort={onSort}
              />

              <SortableHeader
                title="Email"
                field="email"
                sortBy={sortBy}
                sortDirection={sortDirection}
                onSort={onSort}
              />

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Phone
              </th>

              <SortableHeader
                title="PAN"
                field="pan"
                sortBy={sortBy}
                sortDirection={sortDirection}
                onSort={onSort}
              />

              <SortableHeader
                title="Type"
                field="type"
                sortBy={sortBy}
                sortDirection={sortDirection}
                onSort={onSort}
              />

              <SortableHeader
                title="Status"
                field="status"
                sortBy={sortBy}
                sortDirection={sortDirection}
                onSort={onSort}
              />
            </tr>
          </thead>

          <tbody>
            {clients.map((client) => (
              <tr
                key={client.id}
                className="cursor-pointer border-b border-slate-100 transition hover:bg-slate-50"
              >
                <td className="px-6 py-4 font-semibold text-slate-900">
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
                  {formatValue(client.type)}
                </td>

                <td className="px-6 py-4">
                  <StatusBadge
                    status={getStatusVariant(
                      client.status,
                    )}
                  >
                    {formatValue(client.status)}
                  </StatusBadge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}