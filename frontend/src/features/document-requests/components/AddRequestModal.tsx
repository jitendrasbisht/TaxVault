import { useState } from "react";

import {
  RequestForm,
} from "./RequestForm";

import {
  RequestFormValues,
} from "../schema/request.schema";

interface AddRequestModalProps {
  open: boolean;
  onClose: () => void;
}

export function AddRequestModal({
  open,
  onClose,
}: AddRequestModalProps) {
  const [saving, setSaving] =
    useState(false);

  if (!open) {
    return null;
  }

  async function handleSubmit(
    values: RequestFormValues,
  ) {
    setSaving(true);

    try {
      console.log(values);

      onClose();
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-2xl rounded-xl bg-background p-6 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            New Document Request
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <RequestForm
          onSubmit={handleSubmit}
        />

        {saving && (
          <p className="mt-4 text-sm text-muted-foreground">
            Saving...
          </p>
        )}
      </div>
    </div>
  );
}
