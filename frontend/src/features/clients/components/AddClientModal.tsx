import { X } from "lucide-react";

import { Client } from "../types/client";
import {
  ClientForm,
} from "./ClientForm";
import {
  ClientFormValues,
} from "../schema/client.schema";

interface AddClientModalProps {
  open: boolean;
  loading?: boolean;
  client?: Client;
  title?: string;
  submitLabel?: string;
  onClose: () => void;
  onSubmit: (
    values: ClientFormValues,
  ) => void;
}

export function AddClientModal({
  open,
  loading = false,
  client,
  title = "Add Client",
  submitLabel = "Save Client",
  onClose,
  onSubmit,
}: AddClientModalProps) {
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
              Enter client details below.
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
          <ClientForm
            defaultValues={client}
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

export default AddClientModal;