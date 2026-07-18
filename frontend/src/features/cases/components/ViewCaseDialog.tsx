import * as Dialog from "@radix-ui/react-dialog";
import type { Case } from "../types/case";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  caseData: Case | null;
}

export default function ViewCaseDialog({
  open,
  onOpenChange,
  caseData,
}: Props) {
  if (!caseData) return null;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />

        <Dialog.Content className="fixed left-1/2 top-1/2 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-xl">
          <Dialog.Title className="mb-6 text-xl font-semibold">
            {caseData.title}
          </Dialog.Title>

          <div className="grid grid-cols-2 gap-4">
            <div><strong>ID:</strong> {caseData.id}</div>
            <div><strong>Client:</strong> {caseData.client_id}</div>
            <div><strong>Status:</strong> {caseData.status}</div>
            <div><strong>Priority:</strong> {caseData.priority}</div>
            <div><strong>Assigned:</strong> {caseData.assigned_to ?? "-"}</div>
            <div><strong>Due:</strong> {caseData.due_date ?? "-"}</div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
