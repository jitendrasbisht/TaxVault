import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Client } from "../types/client";

interface ClientContactCardProps {
  client: Client;
}

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function ContactItem({
  icon,
  label,
  value,
}: ContactItemProps) {
  return (
    <div className="flex items-start gap-4 rounded-lg border border-slate-100 bg-slate-50 p-4">
      <div className="rounded-lg bg-white p-2 text-slate-600 shadow-sm">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          {label}
        </p>

        <p className="mt-1 break-words font-medium text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
}

export function ClientContactCard({
  client,
}: ClientContactCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 px-6 py-4">
        <h2 className="text-lg font-semibold text-slate-900">
          Contact Information
        </h2>
      </div>

      <div className="space-y-5 p-6">

        <ContactItem
          label="Email Address"
          value={client.email}
          icon={<Mail size={18} />}
        />

        <ContactItem
          label="Phone Number"
          value={client.phone}
          icon={<Phone size={18} />}
        />

        <ContactItem
          label="Registered Address"
          value={client.address}
          icon={<MapPin size={18} />}
        />

      </div>

    </div>
  );
}

export default ClientContactCard;