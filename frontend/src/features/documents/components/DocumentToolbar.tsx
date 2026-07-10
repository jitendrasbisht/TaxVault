import { Button } from "@/components/ui/Button";

import { DocumentSearch } from "./DocumentSearch";

import {
  DocumentCategory,
  DocumentStatus,
} from "../types/document";

interface DocumentToolbarProps {
  search: string;

  category:
    | "all"
    | DocumentCategory;

  status:
    | "all"
    | DocumentStatus;

  onSearchChange: (
    value: string,
  ) => void;

  onCategoryChange: (
    value:
      | "all"
      | DocumentCategory,
  ) => void;

  onStatusChange: (
    value:
      | "all"
      | DocumentStatus,
  ) => void;

  onUpload: () => void;

  total: number;

  filtered: number;
}

export function DocumentToolbar({
  search,
  category,
  status,
  onSearchChange,
  onCategoryChange,
  onStatusChange,
  onUpload,
  total,
  filtered,
}: DocumentToolbarProps) {
  return (
    <div className="mb-6 flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
      <DocumentSearch
        value={search}
        category={category}
        status={status}
        onSearchChange={
          onSearchChange
        }
        onCategoryChange={
          onCategoryChange
        }
        onStatusChange={
          onStatusChange
        }
      />

      <div className="flex items-center gap-5">
        <span className="whitespace-nowrap text-sm font-medium text-slate-500">
          Showing{" "}
          <span className="font-semibold text-slate-900">
            {filtered}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-slate-900">
            {total}
          </span>{" "}
          Documents
        </span>

        <Button
          onClick={onUpload}
        >
          Upload Document
        </Button>
      </div>
    </div>
  );
}