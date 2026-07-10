import {
  AddDocumentModal,
} from "./AddDocumentModal";

import { Document } from "../types/document";

import {
  DocumentFormValues,
} from "../schema/document.schema";

interface EditDocumentModalProps {
  open: boolean;

  loading?: boolean;

  document: Document | null;

  onClose: () => void;

  onSubmit: (
    values: DocumentFormValues,
  ) => void;
}

export default function EditDocumentModal({
  open,
  loading = false,
  document,
  onClose,
  onSubmit,
}: EditDocumentModalProps) {
  return (
    <AddDocumentModal
      open={open}
      loading={loading}
      document={
        document ?? undefined
      }
      title="Edit Document"
      submitLabel="Save Changes"
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
}