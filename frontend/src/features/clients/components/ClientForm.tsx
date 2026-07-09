import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import {
  clientSchema,
  ClientFormValues,
} from "../schema/client.schema";

import {
  defaultClientFormValues,
} from "../types/client-form";

import {
  Client,
  ClientStatus,
  ClientType,
} from "../types/client";

interface ClientFormProps {
  defaultValues?: Client;
  loading?: boolean;
  submitLabel?: string;
  onSubmit: (
    values: ClientFormValues,
  ) => void;
  onCancel: () => void;
}

export function ClientForm({
  defaultValues,
  loading = false,
  submitLabel = "Save Client",
  onSubmit,
  onCancel,
}: ClientFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ClientFormValues>({
    resolver: zodResolver(clientSchema),
    defaultValues:
      defaultValues ?? defaultClientFormValues,
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div className="grid gap-5 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Client Name
          </label>

          <Input
            {...register("name")}
            placeholder="ABC Pvt Ltd"
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email
          </label>

          <Input
            {...register("email")}
            placeholder="client@email.com"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Phone
          </label>

          <Input
            {...register("phone")}
            placeholder="9876543210"
          />

          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            PAN
          </label>

          <Input
            {...register("pan")}
            placeholder="ABCDE1234F"
          />

          {errors.pan && (
            <p className="mt-1 text-sm text-red-600">
              {errors.pan.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            GSTIN
          </label>

          <Input
            {...register("gstin")}
            placeholder="22ABCDE1234F1Z5"
          />

          {errors.gstin && (
            <p className="mt-1 text-sm text-red-600">
              {errors.gstin.message}
            </p>
          )}
        </div>
                <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Address
          </label>

          <textarea
            {...register("address")}
            rows={4}
            placeholder="Enter complete address..."
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.address && (
            <p className="mt-1 text-sm text-red-600">
              {errors.address.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Client Type
          </label>

          <select
            {...register("type")}
            className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option
              value={ClientType.INDIVIDUAL}
            >
              Individual
            </option>

            <option
              value={ClientType.BUSINESS}
            >
              Business
            </option>
          </select>

          {errors.type && (
            <p className="mt-1 text-sm text-red-600">
              {errors.type.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Status
          </label>

          <select
            {...register("status")}
            className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option
              value={ClientStatus.ACTIVE}
            >
              Active
            </option>

            <option
              value={
                ClientStatus.INACTIVE
              }
            >
              Inactive
            </option>

            <option
              value={
                ClientStatus.ARCHIVED
              }
            >
              Archived
            </option>
          </select>

          {errors.status && (
            <p className="mt-1 text-sm text-red-600">
              {errors.status.message}
            </p>
          )}
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

export default ClientForm;