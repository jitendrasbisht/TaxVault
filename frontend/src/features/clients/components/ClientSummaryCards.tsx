import {
  Archive,
  Building2,
  CheckCircle2,
  Clock3,
  User,
  Users,
} from "lucide-react";

import {
  Client,
  ClientStatus,
  ClientType,
} from "../types/client";

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

export function ClientSummaryCards({
  clients,
}: ClientSummaryCardsProps) {
  const totalClients = clients.length;

  const activeClients = clients.filter(
    (client) =>
      client.status === ClientStatus.ACTIVE,
  ).length;

  const inactiveClients = clients.filter(
    (client) =>
      client.status === ClientStatus.INACTIVE,
  ).length;

  const archivedClients = clients.filter(
    (client) =>
      client.status === ClientStatus.ARCHIVED,
  ).length;

  const businessClients = clients.filter(
    (client) =>
      client.type === ClientType.BUSINESS,
  ).length;

  const individualClients =
    totalClients - businessClients;

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
      <SummaryCard
        title="Total Clients"
        value={totalClients}
        icon={<Users size={24} />}
      />

      <SummaryCard
        title="Active Clients"
        value={activeClients}
        icon={<CheckCircle2 size={24} />}
      />

      <SummaryCard
        title="Inactive Clients"
        value={inactiveClients}
        icon={<Clock3 size={24} />}
      />

      <SummaryCard
        title="Archived Clients"
        value={archivedClients}
        icon={<Archive size={24} />}
      />

      <SummaryCard
        title="Business Clients"
        value={businessClients}
        icon={<Building2 size={24} />}
      />

      <SummaryCard
        title="Individual Clients"
        value={individualClients}
        icon={<User size={24} />}
      />
    </div>
  );
}