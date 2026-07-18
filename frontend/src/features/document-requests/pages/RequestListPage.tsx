import { useMemo, useState } from "react";

import { AddRequestModal } from "../components/AddRequestModal";
import { EditRequestModal } from "../components/EditRequestModal";
import { RequestSummaryCards } from "../components/RequestSummaryCards";
import { RequestTable } from "../components/RequestTable";
import { RequestToolbar } from "../components/RequestToolbar";
import {
  RequestFormValues,
} from "../schema/request.schema";
import { useRequests } from "../hooks/useRequests";

export default function RequestListPage() {
  const {
    requests,
    loading,
  } = useRequests();

  const [search, setSearch] =
    useState("");

  const [
    addModalOpen,
    setAddModalOpen,
  ] = useState(false);

  const [
    editModalOpen,
    setEditModalOpen,
  ] = useState(false);

  const [
    selectedRequest,
    setSelectedRequest,
  ] =
    useState<
      Partial<RequestFormValues>
    >({});

  const filteredRequests =
    useMemo(() => {
      const term =
        search.trim().toLowerCase();

      if (!term) {
        return requests;
      }

      return requests.filter(
        (request) =>
          request.title
            .toLowerCase()
            .includes(term) ||
          request.clientName
            .toLowerCase()
            .includes(term),
      );
    }, [requests, search]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Document Requests
        </h1>

        <p className="text-muted-foreground">
          Manage document requests sent to
          clients.
        </p>
      </div>

      <RequestSummaryCards
        requests={filteredRequests}
      />

      <RequestToolbar
        search={search}
        onSearchChange={setSearch}
        onAddRequest={() =>
          setAddModalOpen(true)
        }
      />

      {loading ? (
        <div className="rounded-lg border bg-card p-10 text-center">
          Loading...
        </div>
      ) : (
        <RequestTable
          requests={filteredRequests}
          onEdit={(request) => {
            setSelectedRequest({
              clientId:
                request.clientId,
              clientName:
                request.clientName,
              title: request.title,
              description:
                request.description,
              requestedDocuments:
                request.requestedDocuments,
              status:
                request.status,
              priority:
                request.priority,
              dueDate:
                request.dueDate,
              requestedBy:
                request.requestedBy,
              assignedTo:
                request.assignedTo,
              remarks:
                request.remarks,
            });

            setEditModalOpen(true);
          }}
          onDelete={(request) => {
            console.log(
              "Delete",
              request.id,
            );
          }}
        />
      )}

      <AddRequestModal
  open={addModalOpen}
  onClose={() => setAddModalOpen(false)}
  onSubmit={async (values) => {
    console.log("Add Request", values);
    setAddModalOpen(false);
  }}
/>

      <EditRequestModal
  open={editModalOpen}
  defaultValues={selectedRequest}
  onClose={() => setEditModalOpen(false)}
  onSubmit={async (values) => {
    console.log("Edit Request", values);
    setEditModalOpen(false);
  }}
/>
    </div>
  );
}

