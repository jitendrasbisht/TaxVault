import { Client } from "../types/client";

interface ClientTableProps {
  clients: Client[];
}

export function ClientTable({
  clients,
}: ClientTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <table className="min-w-full">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-600">
              Name
            </th>

            <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-600">
              Email
            </th>

            <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-600">
              Phone
            </th>

            <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-600">
              PAN
            </th>

            <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-600">
              Type
            </th>

            <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-slate-600">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {clients.map((client) => (
            <tr
              key={client.id}
              className="border-t border-slate-200 hover:bg-slate-50"
            >
              <td className="px-6 py-4">{client.name}</td>
              <td className="px-6 py-4">{client.email}</td>
              <td className="px-6 py-4">{client.phone}</td>
              <td className="px-6 py-4">{client.pan}</td>
              <td className="px-6 py-4">{client.type}</td>
              <td className="px-6 py-4">{client.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}