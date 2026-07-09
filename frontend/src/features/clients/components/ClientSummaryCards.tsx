import {
  Building2,
  CheckCircle2,
  Clock3,
  Archive,
  Users,
} from "lucide-react";

import { Client, ClientStatus, ClientType } from "../types/client";

interface ClientSummaryCardsProps {
  clients: Client[];
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
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <p className="mt-3 text-3xl font-bold text-slate-900">
            {value}
          </p>
        </div>

        <div className="rounded-xl bg-slate-100 p-3 text-slate-700">
          {icon}
        </div>
      </div>
    </div>
  );
}

export function ClientSummaryCards({
  clients,
}: ClientSummaryCardsProps) {
  const totalClients = clients.length;

  const activeClients = clients.filter(
    (client) => client.status === ClientStatus.ACTIVE,
  ).length;

  const inactiveClients = clients.filter(
    (client) => client.status === ClientStatus.INACTIVE,
  ).length;

  const archivedClients = clients.filter(
    (client) => client.status === ClientStatus.ARCHIVED,
  ).length;

  const businessClients = clients.filter(
    (client) => client.type === ClientType.BUSINESS,
  ).length;

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
      <SummaryCard
        title="Total Clients"
        value={totalClients}
        icon={<Users size={22} />}
      />

      <SummaryCard
        title="Active Clients"
        value={activeClients}
        icon={<CheckCircle2 size={22} />}
      />

      <SummaryCard
        title="Inactive Clients"
        value={inactiveClients}
        icon={<Clock3 size={22} />}
      />

      <SummaryCard
        title="Archived"
        value={archivedClients}
        icon={<Archive size={22} />}
      />

      <SummaryCard
        title="Business Accounts"
        value={businessClients}
        icon={<Building2 size={22} />}
      />
    </div>
  );
}