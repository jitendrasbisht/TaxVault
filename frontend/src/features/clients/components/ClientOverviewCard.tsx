import { CalendarDays, Clock3, Hash, UserSquare2 } from "lucide-react";

import { Client } from "../types/client";

interface ClientOverviewCardProps {
  client: Client;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

interface ItemProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

function OverviewItem({
  label,
  value,
  icon,
}: ItemProps) {
  return (
    <div className="flex items-start gap-4 rounded-lg border border-slate-100 bg-slate-50 p-4">
      <div className="rounded-lg bg-white p-2 text-slate-600 shadow-sm">
        {icon}
      </div>

      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          {label}
        </p>

        <p className="mt-1 font-semibold text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
}

export function ClientOverviewCard({
  client,
}: ClientOverviewCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 px-6 py-4">
        <h2 className="text-lg font-semibold text-slate-900">
          Overview
        </h2>
      </div>

      <div className="grid gap-5 p-6 md:grid-cols-2">

        <OverviewItem
          label="Client ID"
          value={client.id}
          icon={<Hash size={18} />}
        />

        <OverviewItem
          label="Client Type"
          value={client.type}
          icon={<UserSquare2 size={18} />}
        />

        <OverviewItem
          label="Created On"
          value={formatDate(client.createdAt)}
          icon={<CalendarDays size={18} />}
        />

        <OverviewItem
          label="Last Updated"
          value={formatDate(client.updatedAt)}
          icon={<Clock3 size={18} />}
        />

      </div>

    </div>
  );
}

export default ClientOverviewCard;