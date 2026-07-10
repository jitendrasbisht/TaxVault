import { useParams } from "react-router-dom";

import { PageHeader } from "@/components/ui/PageHeader";

import { useDocuments } from "../hooks/useDocuments";

import DocumentMetadataCard from "../components/DocumentMetadataCard";
import DocumentOwnerCard from "../components/DocumentOwnerCard";
import DocumentDescriptionCard from "../components/DocumentDescriptionCard";
import DocumentVersionHistory from "../components/DocumentVersionHistory";
import DocumentActivityTimeline from "../components/DocumentActivityTimeline";
import DocumentPreviewPanel from "../components/DocumentPreviewPanel";

export function DocumentDetailsPage() {
  const { id } = useParams();

  const { documents } = useDocuments();

  const document = documents.find(
    (item) => item.id === id,
  );

  if (!document) {
    return (
      <div className="p-8">
        Document not found.
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <PageHeader
        title={document.name}
        description={document.clientName}
      />

      <div className="grid gap-6 lg:grid-cols-2">

        <DocumentMetadataCard
          document={document}
        />

        <DocumentOwnerCard
          document={document}
        />

      </div>

      <DocumentDescriptionCard
        description={
          document.description
        }
      />

      <DocumentPreviewPanel
        fileName={document.name}
      />

      <div className="grid gap-6 lg:grid-cols-2">

        <DocumentVersionHistory
          document={document}
        />

        <DocumentActivityTimeline
          document={document}
        />

      </div>

    </div>
  );
}

export default DocumentDetailsPage;