import { useMemo, useState } from "react";

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
        description="Manage all clients from a single location."
      />

      <ClientSearch
        value={search}
        onChange={setSearch}
      />

      {loading ? (
        <Skeleton className="h-96 w-full rounded-xl" />
      ) : filteredClients.length === 0 ? (
        <EmptyState
          title="No clients found"
          description="Try changing your search criteria."
        />
      ) : (
        <ClientTable clients={filteredClients} />
      )}
    </div>
  );
}

export default ClientListPage;