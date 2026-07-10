import { useParams } from "react-router-dom";

import { PageHeader } from "@/components/ui/PageHeader";

import { useDocuments } from "../hooks/useDocuments";

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

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <h3 className="mb-2 font-semibold">
              Category
            </h3>

            <p>{document.category}</p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">
              Status
            </h3>

            <p>{document.status}</p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">
              Version
            </h3>

            <p>v{document.version}</p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">
              Uploaded By
            </h3>

            <p>{document.uploadedBy}</p>
          </div>

        </div>

        <div className="mt-8">

          <h3 className="mb-2 font-semibold">
            Description
          </h3>

          <p className="text-slate-600">
            {document.description ||
              "No description available."}
          </p>

        </div>

      </div>
    </div>
  );
}

export default DocumentDetailsPage;