import * as Dialog from "@radix-ui/react-dialog";
import CaseForm from "./CaseForm";
import type {
  Case,
  CreateCaseRequest,
} from "../types/case";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  caseData?: Case;
  onSubmit: (data: CreateCaseRequest) => Promise<void>;
  isSubmitting?: boolean;
}

export default function CaseDialog({
  open,
  onOpenChange,
  caseData,
  onSubmit,
  isSubmitting = false,
}: Props) {
  return (
    <Dialog.Root
      open={open}
      onOpenChange={onOpenChange}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />

        <Dialog.Content className="fixed left-1/2 top-1/2 w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-xl">
          <Dialog.Title className="mb-4 text-lg font-semibold">
            {caseData ? "Edit Case" : "Create Case"}
          </Dialog.Title>

          <CaseForm
            initialData={caseData}
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
            onCancel={() => onOpenChange(false)}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}