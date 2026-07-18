import { useState } from "react";
import { Button } from "@/components/ui/Button";
import CaseDialog from "./CaseDialog";
import { caseService } from "../services/case.service";
import type { CreateCaseRequest } from "../types/case";

interface Props {
  onSuccess: () => Promise<void>;
}

export default function CreateCaseButton({ onSuccess }: Props) {
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  async function handleSubmit(data: CreateCaseRequest) {
    setSaving(true);

    try {
      await caseService.create(data);
      setOpen(false);
      await onSuccess();
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        New Case
      </Button>

      <CaseDialog
        open={open}
        onOpenChange={setOpen}
        onSubmit={handleSubmit}
        isSubmitting={saving}
      />
    </>
  );
}

