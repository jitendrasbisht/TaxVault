import { X } from "lucide-react";

import { Document } from "../types/document";
import { DocumentForm } from "./DocumentForm";

import {
  DocumentFormValues,
} from "../schema/document.schema";

interface AddDocumentModalProps {
  open: boolean;

  loading?: boolean;

  document?: Document;

  title?: string;

  submitLabel?: string;

  onClose: () => void;

  onSubmit: (
    values: DocumentFormValues,
  ) => void;
}

export function AddDocumentModal({
  open,
  loading = false,
  document,
  title = "Upload Document",
  submitLabel = "Upload Document",
  onClose,
  onSubmit,
}: AddDocumentModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-6">
      <div className="w-full max-w-3xl rounded-xl bg-white shadow-2xl">

        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              {title}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Enter document details.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-slate-100"
          >
            <X size={20} />
          </button>

        </div>

        <div className="p-6">
          <DocumentForm
            defaultValues={document}
            loading={loading}
            submitLabel={submitLabel}
            onCancel={onClose}
            onSubmit={onSubmit}
          />
        </div>

      </div>
    </div>
  );
}

export default AddDocumentModal;