import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import {
  documentSchema,
  DocumentFormValues,
} from "../schema/document.schema";

import {
  Document,
  DocumentCategory,
  DocumentStatus,
} from "../types/document";

interface DocumentFormProps {
  defaultValues?: Document;

  loading?: boolean;

  submitLabel?: string;

  onSubmit: (
    values: DocumentFormValues,
  ) => void;

  onCancel: () => void;
}

const defaultDocumentValues: DocumentFormValues =
  {
    clientId: "",
    clientName: "",
    name: "",
    category:
      DocumentCategory.INCOME_TAX,
    status:
      DocumentStatus.DRAFT,
    fileType: "PDF",
    fileSize: 1,
    uploadedBy: "Admin",
    version: 1,
    tags: [],
    description: "",
  };

export function DocumentForm({
  defaultValues,
  loading = false,
  submitLabel = "Save Document",
  onSubmit,
  onCancel,
}: DocumentFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } =
    useForm<DocumentFormValues>({
      resolver:
        zodResolver(
          documentSchema,
        ),
      defaultValues:
        defaultValues ??
        defaultDocumentValues,
    });

  useEffect(() => {
    if (defaultValues) {
      reset({
        clientId:
          defaultValues.clientId,
        clientName:
          defaultValues.clientName,
        name: defaultValues.name,
        category:
          defaultValues.category,
        status:
          defaultValues.status,
        fileType:
          defaultValues.fileType,
        fileSize:
          defaultValues.fileSize,
        uploadedBy:
          defaultValues.uploadedBy,
        version:
          defaultValues.version,
        tags:
          defaultValues.tags,
        description:
          defaultValues.description ??
          "",
      });
    }
  }, [defaultValues, reset]);

  return (
    <form
      onSubmit={handleSubmit(
        onSubmit,
      )}
      className="space-y-6"
    >
      <div className="grid gap-5 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-medium">
            Client Name
          </label>

          <Input
            {...register(
              "clientName",
            )}
          />

          {errors.clientName && (
            <p className="mt-1 text-sm text-red-600">
              {
                errors.clientName
                  .message
              }
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Document Name
          </label>

          <Input
            {...register("name")}
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-600">
              {
                errors.name.message
              }
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            File Type
          </label>

          <Input
            {...register(
              "fileType",
            )}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Uploaded By
          </label>

          <Input
            {...register(
              "uploadedBy",
            )}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Category
          </label>

          <select
            {...register(
              "category",
            )}
            className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm shadow-sm"
          >
            {Object.values(
              DocumentCategory,
            ).map(
              (
                category,
              ) => (
                <option
                  key={
                    category
                  }
                  value={
                    category
                  }
                >
                  {category}
                </option>
              ),
            )}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Status
          </label>

          <select
            {...register(
              "status",
            )}
            className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm shadow-sm"
          >
            {Object.values(
              DocumentStatus,
            ).map(
              (
                status,
              ) => (
                <option
                  key={
                    status
                  }
                  value={
                    status
                  }
                >
                  {status}
                </option>
              ),
            )}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Description
          </label>

          <textarea
            rows={4}
            {...register(
              "description",
            )}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm"
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 border-t border-slate-200 pt-6">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          loading={loading}
        >
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}

export default DocumentForm;