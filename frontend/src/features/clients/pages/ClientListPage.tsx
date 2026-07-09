import { useMemo, useState } from "react";
import { v4 as uuid } from "uuid";

import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";
import { Pagination } from "@/components/ui/Pagination";
import { Skeleton } from "@/components/ui/Skeleton";

import {
  ClientSearch,
  ClientSortDirection,
  ClientSortField,
} from "../components/ClientSearch";
import { AddClientModal } from "../components/AddClientModal";
import { ClientSummaryCards } from "../components/ClientSummaryCards";
import { ClientTable } from "../components/ClientTable";
import { useClients } from "../hooks/useClients";
import {
  Client,
  ClientStatus,
} from "../types/client";
import { ClientFormValues } from "../schema/client.schema";

const PAGE_SIZE = 10;

export function ClientListPage() {
  const { clients, loading } = useClients();

  const [clientData, setClientData] =
    useState<Client[]>(clients);

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState<
      | "all"
      | ClientStatus.ACTIVE
      | ClientStatus.INACTIVE
    >("all");

  const [sortBy, setSortBy] =
    useState<ClientSortField>("name");

  const [sortDirection, setSortDirection] =
    useState<ClientSortDirection>("asc");

  const [currentPage, setCurrentPage] =
    useState(1);

  const [isAddClientOpen, setIsAddClientOpen] =
    useState(false);

  const filteredClients = useMemo(() => {
    const query = search
      .trim()
      .toLowerCase();

    const filtered =
      clientData.filter((client) => {
        const matchesSearch =
          query === "" ||
          client.name
            .toLowerCase()
            .includes(query) ||
          client.email
            .toLowerCase()
            .includes(query) ||
          client.pan
            .toLowerCase()
            .includes(query);

        const matchesStatus =
          status === "all" ||
          client.status === status;

        return (
          matchesSearch &&
          matchesStatus
        );
      });

    return [...filtered].sort(
      (a, b) => {
        const first = String(
          a[sortBy],
        ).toLowerCase();

        const second = String(
          b[sortBy],
        ).toLowerCase();

        if (first < second) {
          return sortDirection === "asc"
            ? -1
            : 1;
        }

        if (first > second) {
          return sortDirection === "asc"
            ? 1
            : -1;
        }

        return 0;
      },
    );
  }, [
    clientData,
    search,
    status,
    sortBy,
    sortDirection,
  ]);

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredClients.length /
        PAGE_SIZE,
    ),
  );

  const paginatedClients =
    useMemo(() => {
      const start =
        (currentPage - 1) *
        PAGE_SIZE;

      return filteredClients.slice(
        start,
        start + PAGE_SIZE,
      );
    }, [
      filteredClients,
      currentPage,
    ]);

  function handleSort(
    field: ClientSortField,
  ) {
    if (field === sortBy) {
      setSortDirection((current) =>
        current === "asc"
          ? "desc"
          : "asc",
      );

      return;
    }

    setSortBy(field);
    setSortDirection("asc");
  }

  function handleCreateClient(
    values: ClientFormValues,
  ) {
    const now =
      new Date().toISOString();

    const newClient: Client = {
      id: uuid(),
      ...values,
      createdAt: now,
      updatedAt: now,
    };

    setClientData((current) => [
      newClient,
      ...current,
    ]);

    setCurrentPage(1);
    setIsAddClientOpen(false);
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Clients"
        description="Manage all your clients from one place."
      />

      <ClientSummaryCards
        clients={clientData}
      />

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <ClientSearch
            value={search}
            status={status}
            sortBy={sortBy}
            sortDirection={
              sortDirection
            }
            onSearchChange={
              setSearch
            }
            onStatusChange={
              setStatus
            }
            onSortByChange={
              setSortBy
            }
            onSortDirectionChange={
              setSortDirection
            }
          />

          <div className="flex items-center gap-5">
            <span className="whitespace-nowrap text-sm font-medium text-slate-500">
              {filteredClients.length}
              {" "}Clients
            </span>

            <Button
              onClick={() =>
                setIsAddClientOpen(
                  true,
                )
              }
            >
              Add Client
            </Button>
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
          <>
            <ClientTable
              clients={paginatedClients}
              sortBy={sortBy}
              sortDirection={sortDirection}
              onSort={handleSort}
            />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={filteredClients.length}
              pageSize={PAGE_SIZE}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>

      <AddClientModal
        open={isAddClientOpen}
        title="Add New Client"
        submitLabel="Create Client"
        onClose={() =>
          setIsAddClientOpen(false)
        }
        onSubmit={handleCreateClient}
      />
    </div>
  );
}

export default ClientListPage;