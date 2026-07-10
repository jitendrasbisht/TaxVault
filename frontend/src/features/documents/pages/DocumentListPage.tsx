import { useMemo, useState } from "react";

import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";
import { Skeleton } from "@/components/ui/Skeleton";

import { DocumentSearch } from "../components/DocumentSearch";
import { DocumentSummaryCards } from "../components/DocumentSummaryCards";
import { DocumentTable } from "../components/DocumentTable";

import { useDocuments } from "../hooks/useDocuments";

export function DocumentListPage() {
  const { documents, loading } =
    useDocuments();

  const [search, setSearch] =
    useState("");

  const filteredDocuments =
    useMemo(() => {
      const query = search
        .trim()
        .toLowerCase();

      if (!query) {
        return documents;
      }

      return documents.filter(
        (document) =>
          document.name
            .toLowerCase()
            .includes(query) ||
          document.clientName
            .toLowerCase()
            .includes(query),
      );
    }, [documents, search]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Document Vault"
        description="Manage all client documents."
      />

      <DocumentSummaryCards
        documents={documents}
      />

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <DocumentSearch
            value={search}
            onSearchChange={
              setSearch
            }
          />
        </div>

        {loading ? (
          <Skeleton className="h-[500px] w-full rounded-xl" />
        ) : filteredDocuments.length ===
          0 ? (
          <EmptyState
            title="No Documents Found"
            description="Try adjusting your search."
          />
        ) : (
          <DocumentTable
            documents={
              filteredDocuments
            }
          />
        )}
      </div>
    </div>
  );
}

export default DocumentListPage;