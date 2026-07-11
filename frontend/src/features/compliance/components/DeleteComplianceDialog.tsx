import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

interface DeleteComplianceDialogProps {
  open: boolean;
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function DeleteComplianceDialog({
  open,
  title,
  onConfirm,
  onCancel,
}: DeleteComplianceDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <Card className="w-full max-w-md space-y-6 p-6">
        <div>
          <h2 className="text-lg font-semibold">
            Delete Compliance
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Are you sure you want to delete{" "}
            <span className="font-medium">{title}</span>?
          </p>
        </div>

        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>

          <Button variant="destructive" onClick={onConfirm}>
            Delete
          </Button>
        </div>
      </Card>
    </div>
  );
}