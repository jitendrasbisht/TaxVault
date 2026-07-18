import { useEffect } from "react";
import { useForm } from "react-hook-form";

import type {
  Case,
  CreateCaseRequest,
} from "../types/case";

interface Props {
  initialData?: Case;
  onSubmit: (data: CreateCaseRequest) => Promise<void> | void;
  onCancel: () => void;
  isSubmitting?: boolean;
}

export default function CaseForm({
  initialData,
  onSubmit,
  onCancel,
  isSubmitting = false,
}: Props) {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<CreateCaseRequest>({
    defaultValues: {
      title: "",
      client_id: "",
      case_type: "",
      priority: "MEDIUM",
      assigned_to: "",
      due_date: "",
    },
  });

  useEffect(() => {
    if (!initialData) return;

    reset({
      title: initialData.title,
      client_id: String(initialData.client_id),
      case_type: initialData.case_type,
      priority: initialData.priority,
      assigned_to: initialData.assigned_to ?? "",
      due_date: initialData.due_date ?? "",
    });
  }, [initialData, reset]);

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="space-y-4"
    >
      <input
        {...register("title")}
        placeholder="Case Title"
        className="w-full rounded border p-2"
      />

      <input
        {...register("client_id")}
        placeholder="Client ID"
        className="w-full rounded border p-2"
      />

      <input
        {...register("case_type")}
        placeholder="Case Type"
        className="w-full rounded border p-2"
      />

      <select
        {...register("priority")}
        className="w-full rounded border p-2"
      >
        <option value="LOW">LOW</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="HIGH">HIGH</option>
        <option value="URGENT">URGENT</option>
      </select>

      <input
        {...register("assigned_to")}
        placeholder="Assigned To"
        className="w-full rounded border p-2"
      />

      <input
        type="date"
        {...register("due_date")}
        className="w-full rounded border p-2"
      />

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="rounded border px-4 py-2"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          {initialData ? "Update Case" : "Create Case"}
        </button>
      </div>
    </form>
  );
}
