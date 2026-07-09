import { useMemo, useState } from "react";

import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";
import { Skeleton } from "@/components/ui/Skeleton";

import { ClientSearch } from "../components/ClientSearch";
import { ClientTable } from "../components/ClientTable";
import { useClients } from "../hooks/useClients";

export function ClientListPage() {
  const { clients, loading } = useClients();
  const [search, setSearch] = useState("");

  const filteredClients = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return clients;
    }

    return clients.filter((client) => {
      return (
        client.name.toLowerCase().includes(query) ||
        client.email.toLowerCase().includes(query) ||
        client.pan.toLowerCase().includes(query)
      );
    });
  }, [clients, search]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Clients"
        description="Manage all your clients from one place."
      />

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <ClientSearch
            value={search}
            onChange={setSearch}
          />

          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-500">
              {filteredClients.length} Clients
            </span>

            <Button>
              Add Client
            </Button>
          </div>
        </div>

        {loading ? (
          <Skeleton className="h-96 w-full rounded-xl" />
        ) : filteredClients.length === 0 ? (
          <EmptyState
            title="No Clients Found"
            description="Try a different search term."
          />
        ) : (
          <ClientTable clients={filteredClients} />
        )}
      </div>
    </div>
  );
}

export default ClientListPage;