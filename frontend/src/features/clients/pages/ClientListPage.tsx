import { useMemo, useState } from "react";

import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";
import { Skeleton } from "@/components/ui/Skeleton";

import {
  ClientSearch,
  ClientSortDirection,
  ClientSortField,
} from "../components/ClientSearch";
import { ClientSummaryCards } from "../components/ClientSummaryCards";
import { ClientTable } from "../components/ClientTable";
import { useClients } from "../hooks/useClients";
import { Client, ClientStatus } from "../types/client";

export function ClientListPage() {
  const { clients, loading } = useClients();

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState<
    "all" | ClientStatus.ACTIVE | ClientStatus.INACTIVE
  >("all");

  const [sortBy] =
    useState<ClientSortField>("name");

  const [sortDirection, setSortDirection] =
    useState<ClientSortDirection>("asc");

  const filteredClients = useMemo(() => {
    const query = search.trim().toLowerCase();

    const filtered = clients.filter((client) => {
      const matchesSearch =
        query === "" ||
        client.name.toLowerCase().includes(query) ||
        client.email.toLowerCase().includes(query) ||
        client.pan.toLowerCase().includes(query);

      const matchesStatus =
        status === "all" || client.status === status;

      return matchesSearch && matchesStatus;
    });

    const sorted = [...filtered].sort(
      (a: Client, b: Client) => {
        const first = String(a[sortBy]).toLowerCase();
        const second = String(b[sortBy]).toLowerCase();

        if (first < second) {
          return sortDirection === "asc" ? -1 : 1;
        }

        if (first > second) {
          return sortDirection === "asc" ? 1 : -1;
        }

        return 0;
      },
    );

    return sorted;
  }, [
    clients,
    search,
    status,
    sortBy,
    sortDirection,
  ]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Clients"
        description="Manage all your clients from one place."
      />

      <ClientSummaryCards clients={clients} />

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <ClientSearch
            value={search}
            status={status}
            sortBy={sortBy}
            sortDirection={sortDirection}
            onSearchChange={setSearch}
            onStatusChange={setStatus}
            onSortByChange={() => {}}
            onSortDirectionChange={setSortDirection}
          />

          <div className="flex items-center gap-5">
            <span className="whitespace-nowrap text-sm font-medium text-slate-500">
              {filteredClients.length} Clients
            </span>

            <Button>Add Client</Button>
          </div>
        </div>

        {loading ? (
          <Skeleton className="h-[520px] w-full rounded-xl" />
        ) : filteredClients.length === 0 ? (
          <EmptyState
            title="No Clients Found"
            description="Try adjusting your search or filters."
          />
        ) : (
          <ClientTable
            clients={filteredClients}
            sortBy={sortBy}
            sortDirection={sortDirection}
            onSort={() => {}}
          />
        )}
      </div>
    </div>
  );
}

export default ClientListPage;