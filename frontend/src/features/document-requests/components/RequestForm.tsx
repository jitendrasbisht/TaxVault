import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  requestSchema,
  RequestFormValues,
} from "../schema/request.schema";

interface RequestFormProps {
  defaultValues?: Partial<RequestFormValues>;
  onSubmit: (
    values: RequestFormValues,
  ) => void | Promise<void>;
}

export function RequestForm({
  defaultValues,
  onSubmit,
}: RequestFormProps) {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<RequestFormValues>({
    resolver:
      zodResolver(requestSchema),
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div>
        <label className="mb-1 block text-sm font-medium">
          Title
        </label>

        <input
          {...register("title")}
          className="w-full rounded-lg border px-3 py-2"
        />

        {errors.title && (
          <p className="mt-1 text-sm text-red-500">
            {errors.title.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Description
        </label>

        <textarea
          {...register("description")}
          rows={4}
          className="w-full rounded-lg border px-3 py-2"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Due Date
        </label>

        <input
          type="date"
          {...register("dueDate")}
          className="w-full rounded-lg border px-3 py-2"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg bg-primary px-4 py-2 text-primary-foreground"
      >
        {isSubmitting
          ? "Saving..."
          : "Save Request"}
      </button>
    </form>
  );
}
