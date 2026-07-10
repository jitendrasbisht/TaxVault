import { useMemo, useState } from "react";

import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";
import { Skeleton } from "@/components/ui/Skeleton";

import { DocumentSearch } from "../components/DocumentSearch";
import { DocumentSummaryCards } from "../components/DocumentSummaryCards";
import { DocumentTable } from "../components/DocumentTable";

import { useDocuments } from "../hooks/useDocuments";

import {
  DocumentCategory,
  DocumentStatus,
} from "../types/document";

export function DocumentListPage() {
  const { documents, loading } =
    useDocuments();

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState<
      | "all"
      | DocumentCategory
    >("all");

  const [status, setStatus] =
    useState<
      | "all"
      | DocumentStatus
    >("all");

  const filteredDocuments =
    useMemo(() => {
      const query = search
        .trim()
        .toLowerCase();

      return documents.filter(
        (document) => {
          const matchesSearch =
            query === "" ||
            document.name
              .toLowerCase()
              .includes(query) ||
            document.clientName
              .toLowerCase()
              .includes(query);

          const matchesCategory =
            category === "all" ||
            document.category ===
              category;

          const matchesStatus =
            status === "all" ||
            document.status ===
              status;

          return (
            matchesSearch &&
            matchesCategory &&
            matchesStatus
          );
        },
      );
    }, [
      documents,
      search,
      category,
      status,
    ]);

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
            category={category}
            status={status}
            onSearchChange={
              setSearch
            }
            onCategoryChange={
              setCategory
            }
            onStatusChange={
              setStatus
            }
          />
        </div>

        {loading ? (
          <Skeleton className="h-[500px] w-full rounded-xl" />
        ) : filteredDocuments.length ===
          0 ? (
          <EmptyState
            title="No Documents Found"
            description="Try adjusting your search or filters."
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