import { useEffect, useMemo, useState } from "react";

import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";
import { Pagination } from "@/components/ui/Pagination";
import { Skeleton } from "@/components/ui/Skeleton";

import { DocumentSummaryCards } from "../components/DocumentSummaryCards";
import { DocumentTable } from "../components/DocumentTable";
import { DocumentToolbar } from "../components/DocumentToolbar";
import AddDocumentModal from "../components/AddDocumentModal";
import EditDocumentModal from "../components/EditDocumentModal";

import { useDocuments } from "../hooks/useDocuments";

import { documentService } from "../services/mockDocument.service";

import {
  Document,
  DocumentCategory,
  DocumentStatus,
} from "../types/document";

import {
  DocumentFormValues,
} from "../schema/document.schema";

const PAGE_SIZE = 10;

export function DocumentListPage() {
  const { documents, loading } =
    useDocuments();

  const [documentData, setDocumentData] =
    useState<Document[]>([]);

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

  const [currentPage, setCurrentPage] =
    useState(1);

  const [
    isAddDocumentOpen,
    setIsAddDocumentOpen,
  ] = useState(false);

  const [
    editingDocument,
    setEditingDocument,
  ] = useState<Document | null>(null);

  useEffect(() => {
    setDocumentData(documents);
  }, [documents]);

  async function refreshDocuments() {
    const data =
      await documentService.getDocuments();

    setDocumentData(data);
  }

  async function handleCreateDocument(
    values: DocumentFormValues,
  ) {
    await documentService.createDocument(
      values,
    );

    await refreshDocuments();

    setCurrentPage(1);

    setIsAddDocumentOpen(false);
  }

  async function handleUpdateDocument(
    values: DocumentFormValues,
  ) {
    if (!editingDocument) {
      return;
    }

    await documentService.updateDocument(
      editingDocument.id,
      values,
    );

    await refreshDocuments();

    setEditingDocument(null);
  }

  const filteredDocuments =
    useMemo(() => {
      const query = search
        .trim()
        .toLowerCase();

      return documentData.filter(
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
      documentData,
      search,
      category,
      status,
    ]);

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredDocuments.length /
        PAGE_SIZE,
    ),
  );

  const paginatedDocuments =
    useMemo(() => {
      const start =
        (currentPage - 1) *
        PAGE_SIZE;

      return filteredDocuments.slice(
        start,
        start + PAGE_SIZE,
      );
    }, [
      filteredDocuments,
      currentPage,
    ]);

  return (
    <div className="space-y-6">

      <PageHeader
        title="Document Vault"
        description="Manage all client documents."
      />

      <DocumentSummaryCards
        documents={documentData}
      />

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

        <DocumentToolbar
          search={search}
          category={category}
          status={status}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
          onStatusChange={setStatus}
          onUpload={() =>
            setIsAddDocumentOpen(true)
          }
          total={documentData.length}
          filtered={
            filteredDocuments.length
          }
        />
        {loading ? (
          <Skeleton className="h-[520px] w-full rounded-xl" />
        ) : filteredDocuments.length === 0 ? (
          <EmptyState
            title="No Documents Found"
            description="Try adjusting your search or filters."
          />
        ) : (
          <>
            <DocumentTable
              documents={
                paginatedDocuments
              }
            />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={
                filteredDocuments.length
              }
              pageSize={PAGE_SIZE}
              onPageChange={
                setCurrentPage
              }
            />
          </>
        )}
      </div>

      <AddDocumentModal
        open={isAddDocumentOpen}
        title="Upload Document"
        submitLabel="Upload Document"
        onClose={() =>
          setIsAddDocumentOpen(false)
        }
        onSubmit={
          handleCreateDocument
        }
      />

      <EditDocumentModal
        open={
          editingDocument !== null
        }
        document={
          editingDocument
        }
        onClose={() =>
          setEditingDocument(null)
        }
        onSubmit={
          handleUpdateDocument
        }
      />
    </div>
  );
}

export default DocumentListPage;