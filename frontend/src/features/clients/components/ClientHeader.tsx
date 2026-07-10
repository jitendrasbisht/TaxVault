import { ArrowLeft, Calendar, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";

import {
  Client,
  ClientStatus,
} from "../types/client";

interface ClientHeaderProps {
  client: Client;
  onEdit?: () => void;
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

function formatLabel(value: string) {
  return (
    value.charAt(0) +
    value.slice(1).toLowerCase()
  );
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    },
  );
}

export function ClientHeader({
  client,
  onEdit,
}: ClientHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <Button
          variant="outline"
          onClick={() =>
            navigate("/clients")
          }
        >
          <ArrowLeft
            size={18}
            className="mr-2"
          />
          Back to Clients
        </Button>

        <Button onClick={onEdit}>
          <Pencil
            size={18}
            className="mr-2"
          />
          Edit Client
        </Button>

      </div>

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-3xl font-bold text-slate-900">
            {client.name}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3">

            <StatusBadge
              status={getStatusVariant(
                client.status,
              )}
            >
              {formatLabel(
                client.status,
              )}
            </StatusBadge>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
              {formatLabel(client.type)}
            </span>

          </div>

        </div>

        <div className="flex items-center gap-2 text-sm text-slate-500">

          <Calendar size={16} />

          <span>
            Client since{" "}
            <strong className="font-semibold text-slate-700">
              {formatDate(
                client.createdAt,
              )}
            </strong>
          </span>

        </div>

      </div>

    </div>
  );
}

export default ClientHeader;