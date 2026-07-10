import { Modal } from "@/components/ui/Modal";

import { Client } from "../types/client";
import { ClientFormValues } from "../schema/client.schema";
import { ClientForm } from "./ClientForm";

interface EditClientModalProps {
  open: boolean;
  client: Client | null;
  loading?: boolean;
  onClose: () => void;
  onSubmit: (
    values: ClientFormValues,
  ) => void;
}

export function EditClientModal({
  open,
  client,
  loading = false,
  onClose,
  onSubmit,
}: EditClientModalProps) {
  return (
    <Modal
      open={open}
      title="Edit Client"
      onClose={onClose}
    >
      {client && (
        <ClientForm
          defaultValues={client}
          loading={loading}
          submitLabel="Save Changes"
          onSubmit={onSubmit}
          onCancel={onClose}
        />
      )}
    </Modal>
  );
}

export default EditClientModal;