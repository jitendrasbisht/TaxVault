import { useState } from "react";
import { Button } from "@/components/ui/Button";
import CaseDialog from "./CaseDialog";
import { caseService } from "../services/case.service";
import type { Case, CreateCaseRequest } from "../types/case";

interface Props {
  caseData: Case;
  onSuccess: () => Promise<void>;
}

export default function EditCaseButton({ caseData, onSuccess }: Props) {
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  async function handleSubmit(data: CreateCaseRequest) {
    setSaving(true);

    try {
      await caseService.update(caseData.id, data);
      setOpen(false);
      await onSuccess();
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Edit
      </Button>

      <CaseDialog
        open={open}
        onOpenChange={setOpen}
        caseData={caseData}
        onSubmit={handleSubmit}
        isSubmitting={saving}
      />
    </>
  );
}

