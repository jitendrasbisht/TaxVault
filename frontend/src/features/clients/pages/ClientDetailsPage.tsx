import { useEffect, useMemo, useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";
import { Skeleton } from "@/components/ui/Skeleton";

import DeleteConfirmationModal from "@/features/clients/components/DeleteConfirmationModal";
import ClientContactCard from "../components/ClientContactCard";
import ClientHeader from "../components/ClientHeader";
import ClientOverviewCard from "../components/ClientOverviewCard";
import ClientTaxCard from "../components/ClientTaxCard";

import AddDocumentModal from "@/features/documents/components/AddDocumentModal";
import { DocumentSummaryCards } from "@/features/documents/components/DocumentSummaryCards";
import { DocumentTable } from "@/features/documents/components/DocumentTable";
import { DocumentToolbar } from "@/features/documents/components/DocumentToolbar";
import EditDocumentModal from "@/features/documents/components/EditDocumentModal";
import { useDocuments } from "@/features/documents/hooks/useDocuments";
import { documentService } from "@/features/documents/services/mockDocument.service";
import { DocumentFormValues } from "@/features/documents/schema/document.schema";
import {
  Document,
  DocumentCategory,
  DocumentStatus,
} from "@/features/documents/types/document";

import { clientService } from "../services/mockClient.service";

import { Client } from "../types/client";

export function ClientDetailsPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [client, setClient] =
    useState<Client | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] = useState<
    | "all"
    | DocumentCategory
  >("all");

  const [status, setStatus] = useState<
    | "all"
    | DocumentStatus
  >("all");

  const [documentData, setDocumentData] =
    useState<Document[]>([]);

  const [isAddDocumentOpen, setIsAddDocumentOpen] =
    useState(false);

  const [editingDocument, setEditingDocument] =
    useState<Document | null>(null);

  const [deletingDocument, setDeletingDocument] =
    useState<Document | null>(null);

  const selectedClientId = client?.id;

  const { documents, loading: documentsLoading } =
    useDocuments(selectedClientId);

  useEffect(() => {
    async function loadClient() {
      if (!id) {
        navigate("/clients");
        return;
      }

      setLoading(true);

      const data =
        await clientService.getClientById(
          id,
        );

      setClient(data ?? null);

      setLoading(false);
    }

    loadClient();
  }, [id, navigate]);

  useEffect(() => {
    setDocumentData(documents);
  }, [documents]);

  const filteredDocuments = useMemo(() => {
    const query = search.trim().toLowerCase();

    return documentData.filter((document) => {
      const matchesSearch =
        query === "" ||
        document.name.toLowerCase().includes(query) ||
        document.clientName.toLowerCase().includes(query);

      const matchesCategory =
        category === "all" ||
        document.category === category;

      const matchesStatus =
        status === "all" ||
        document.status === status;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus
      );
    });
  }, [category, documentData, search, status]);

  async function refreshDocuments() {
    const data = await documentService.getDocuments();

    const filteredDocuments = selectedClientId
      ? data.filter((document) => document.clientId === selectedClientId)
      : data;

    setDocumentData(filteredDocuments);
  }

  async function handleCreateDocument(values: DocumentFormValues) {
    if (!selectedClientId || !client) {
      return;
    }

    await documentService.createDocument({
      ...values,
      clientId: selectedClientId,
      clientName: client.name,
    });

    await refreshDocuments();
    setIsAddDocumentOpen(false);
  }

  async function handleUpdateDocument(values: DocumentFormValues) {
    if (!editingDocument || !selectedClientId || !client) {
      return;
    }

    await documentService.updateDocument(editingDocument.id, {
      ...values,
      clientId: selectedClientId,
      clientName: client.name,
    });

    await refreshDocuments();
    setEditingDocument(null);
  }

  async function handleDeleteDocument() {
    if (!deletingDocument) {
      return;
    }

    await documentService.deleteDocument(deletingDocument.id);

    await refreshDocuments();
    setDeletingDocument(null);
  }

  function createPrefilledDocument(): Document {
    return {
      id: "",
      clientId: client?.id ?? "",
      clientName: client?.name ?? "",
      name: "",
      category: DocumentCategory.INCOME_TAX,
      status: DocumentStatus.DRAFT,
      fileType: "PDF",
      fileSize: 1,
      uploadedBy: "Admin",
      uploadedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      version: 1,
      tags: [],
      description: "",
    };
  }

  if (loading) {
    return (
      <Skeleton className="h-[700px] w-full rounded-xl" />
    );
  }

  if (!client) {
    return (
      <EmptyState
        title="Client Not Found"
        description="The requested client could not be found."
      />
    );
  }

  return (
    <div className="space-y-6">
      <ClientHeader client={client} />

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <ClientOverviewCard client={client} />

          <ClientContactCard client={client} />
        </div>

        <div>
          <ClientTaxCard client={client} />
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <PageHeader
          title="Client Documents"
          description={`${client.name}'s uploaded documents.`}
        />

        <div className="mt-6 space-y-6">
          <DocumentSummaryCards documents={filteredDocuments} />

          <DocumentToolbar
            search={search}
            category={category}
            status={status}
            onSearchChange={setSearch}
            onCategoryChange={setCategory}
            onStatusChange={setStatus}
            onUpload={() => setIsAddDocumentOpen(true)}
            total={documentData.length}
            filtered={filteredDocuments.length}
          />

          {documentsLoading ? (
            <Skeleton className="h-[320px] w-full rounded-xl" />
          ) : filteredDocuments.length === 0 ? (
            <EmptyState
              title="No Documents Found"
              description="No documents are available for this client yet."
            />
          ) : (
            <DocumentTable
              documents={filteredDocuments}
              onEdit={setEditingDocument}
              onDelete={setDeletingDocument}
            />
          )}
        </div>
      </div>

      <AddDocumentModal
        open={isAddDocumentOpen}
        title="Upload Document"
        submitLabel="Upload Document"
        document={createPrefilledDocument()}
        onClose={() => setIsAddDocumentOpen(false)}
        onSubmit={handleCreateDocument}
      />

      <EditDocumentModal
        open={editingDocument !== null}
        document={editingDocument}
        onClose={() => setEditingDocument(null)}
        onSubmit={handleUpdateDocument}
      />

      <DeleteConfirmationModal
        open={deletingDocument !== null}
        title="Delete Document"
        message={
          deletingDocument
            ? `Are you sure you want to delete "${deletingDocument.name}"? This action cannot be undone.`
            : ""
        }
        onClose={() => setDeletingDocument(null)}
        onConfirm={handleDeleteDocument}
      />
    </div>
  );
}

export default ClientDetailsPage;