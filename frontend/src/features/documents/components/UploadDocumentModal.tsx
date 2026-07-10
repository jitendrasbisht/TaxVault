import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import { Select } from "@/components/ui/Select";

import {
  DocumentCategory,
  DocumentStatus,
} from "../types/document";

interface UploadDocumentModalProps {
  open: boolean;
  onClose: () => void;
}

export function UploadDocumentModal({
  open,
  onClose,
}: UploadDocumentModalProps) {
  const [name, setName] =
    useState("");

  const [clientName, setClientName] =
    useState("");

  const [category, setCategory] =
    useState<DocumentCategory>(
      DocumentCategory.INCOME_TAX,
    );

  const [status, setStatus] =
    useState<DocumentStatus>(
      DocumentStatus.DRAFT,
    );

  function handleSubmit(
    event: React.FormEvent,
  ) {
    event.preventDefault();

    onClose();
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Upload Document"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <Input
          placeholder="Document Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <Input
          placeholder="Client Name"
          value={clientName}
          onChange={(e) =>
            setClientName(
              e.target.value,
            )
          }
        />

        <Select
          value={category}
          onChange={(e) =>
            setCategory(
              e.target
                .value as DocumentCategory,
            )
          }
        >
          {Object.values(
            DocumentCategory,
          ).map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </Select>

        <Select
          value={status}
          onChange={(e) =>
            setStatus(
              e.target
                .value as DocumentStatus,
            )
          }
        >
          {Object.values(
            DocumentStatus,
          ).map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </Select>

        <div className="flex justify-end gap-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button type="submit">
            Upload
          </Button>
        </div>
      </form>
    </Modal>
  );
}