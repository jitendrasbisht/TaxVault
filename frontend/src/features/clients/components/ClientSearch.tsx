import {
  ArrowDownAZ,
  ArrowUpAZ,
  Search,
} from "lucide-react";

import { Input } from "@/components/ui/Input";

import { ClientStatus } from "../types/client";

export type ClientSortField =
  | "name"
  | "email"
  | "pan"
  | "type"
  | "status";

export type ClientSortDirection =
  | "asc"
  | "desc";

interface ClientSearchProps {
  value: string;

  status:
    | "all"
    | ClientStatus.ACTIVE
    | ClientStatus.INACTIVE;

  sortBy: ClientSortField;

  sortDirection: ClientSortDirection;

  onSearchChange: (
    value: string,
  ) => void;

  onStatusChange: (
    value:
      | "all"
      | ClientStatus.ACTIVE
      | ClientStatus.INACTIVE,
  ) => void;

  onSortByChange: (
    value: ClientSortField,
  ) => void;

  onSortDirectionChange: (
    value: ClientSortDirection,
  ) => void;
}

export function ClientSearch({
  value,
  status,
  sortBy,
  sortDirection,
  onSearchChange,
  onStatusChange,
  onSortByChange,
  onSortDirectionChange,
}: ClientSearchProps) {
  return (
    <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
      <div className="grid flex-1 gap-5 lg:grid-cols-5">

        <div className="lg:col-span-3">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Search
          </label>

          <div className="relative">
            <Search
              size={18}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <Input
              className="pl-10"
              placeholder="Search clients by name, email or PAN..."
              value={value}
              onChange={(event) =>
                onSearchChange(
                  event.target.value,
                )
              }
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Status
          </label>

          <select
            value={status}
            onChange={(event) =>
              onStatusChange(
                event.target.value as
                  | "all"
                  | ClientStatus.ACTIVE
                  | ClientStatus.INACTIVE,
              )
            }
            className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm shadow-sm transition focus:border-slate-500 focus:outline-none"
          >
            <option value="all">
              All Status
            </option>

            <option
              value={ClientStatus.ACTIVE}
            >
              Active
            </option>

            <option
              value={ClientStatus.INACTIVE}
            >
              Inactive
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Sort By
          </label>

          <select
            value={sortBy}
            onChange={(event) =>
              onSortByChange(
                event.target
                  .value as ClientSortField,
              )
            }
            className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm shadow-sm transition focus:border-slate-500 focus:outline-none"
          >
            <option value="name">
              Name
            </option>

            <option value="email">
              Email
            </option>

            <option value="pan">
              PAN
            </option>

            <option value="type">
              Client Type
            </option>

            <option value="status">
              Status
            </option>
          </select>
        </div>

      </div>

      <button
        type="button"
        onClick={() =>
          onSortDirectionChange(
            sortDirection === "asc"
              ? "desc"
              : "asc",
          )
        }
        className="flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 text-sm font-medium shadow-sm transition hover:bg-slate-50"
      >
        {sortDirection === "asc" ? (
          <>
            <ArrowUpAZ size={18} />
            Ascending
          </>
        ) : (
          <>
            <ArrowDownAZ size={18} />
            Descending
          </>
        )}
      </button>
    </div>
  );
}