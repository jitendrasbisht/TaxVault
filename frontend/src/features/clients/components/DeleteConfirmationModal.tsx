import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

interface DeleteConfirmationModalProps {
  open: boolean;
  loading?: boolean;
  title?: string;
  message?: string;
  onClose: () => void;
  onConfirm: () => void;
}

export function DeleteConfirmationModal({
  open,
  loading = false,
  title = "Delete Client",
  message = "Are you sure you want to delete this client? This action cannot be undone.",
  onClose,
  onConfirm,
}: DeleteConfirmationModalProps) {
  return (
    <Modal
      open={open}
      title={title}
      onClose={onClose}
    >
      <div className="space-y-6">
        <p className="text-sm text-slate-600">
          {message}
        </p>

        <div className="flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            loading={loading}
            onClick={onConfirm}
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteConfirmationModal;