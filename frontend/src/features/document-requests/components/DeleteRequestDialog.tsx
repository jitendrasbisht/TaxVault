import { useState } from "react";

interface DeleteRequestDialogProps {
  open: boolean;
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function DeleteRequestDialog({
  open,
  title,
  onConfirm,
  onCancel,
}: DeleteRequestDialogProps) {
  const [deleting, setDeleting] =
    useState(false);

  if (!open) {
    return null;
  }

  async function handleDelete() {
    setDeleting(true);

    try {
      await Promise.resolve();

      onConfirm();
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-xl bg-background p-6 shadow-xl">
        <h2 className="text-xl font-semibold">
          Delete Request
        </h2>

        <p className="mt-3 text-sm text-muted-foreground">
          Are you sure you want to delete
          <span className="font-medium">
            {" "}
            {title}
          </span>
          ?
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border px-4 py-2"
          >
            Cancel
          </button>

          <button
            type="button"
            disabled={deleting}
            onClick={handleDelete}
            className="rounded-lg bg-red-600 px-4 py-2 text-white"
          >
            {deleting
              ? "Deleting..."
              : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
