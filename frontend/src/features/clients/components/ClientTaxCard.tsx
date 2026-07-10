import {
  BadgeCheck,
  Building2,
  FileBadge,
} from "lucide-react";

import { Client } from "../types/client";

interface ClientTaxCardProps {
  client: Client;
}

interface TaxItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function TaxItem({
  icon,
  label,
  value,
}: TaxItemProps) {
  return (
    <div className="flex items-start gap-4 rounded-lg border border-slate-100 bg-slate-50 p-4">
      <div className="rounded-lg bg-white p-2 text-slate-600 shadow-sm">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          {label}
        </p>

        <p className="mt-1 break-all font-medium text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
}

export function ClientTaxCard({
  client,
}: ClientTaxCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 px-6 py-4">
        <h2 className="text-lg font-semibold text-slate-900">
          Tax Information
        </h2>
      </div>

      <div className="space-y-5 p-6">

        <TaxItem
          label="PAN Number"
          value={client.pan}
          icon={<FileBadge size={18} />}
        />

        <TaxItem
          label="GSTIN"
          value={client.gstin || "Not Applicable"}
          icon={<BadgeCheck size={18} />}
        />

        <TaxItem
          label="Entity Type"
          value={
            client.type === "BUSINESS"
              ? "Business"
              : "Individual"
          }
          icon={<Building2 size={18} />}
        />

      </div>

    </div>
  );
}

export default ClientTaxCard;