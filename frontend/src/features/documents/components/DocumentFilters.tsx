import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";

import {
  DocumentCategory,
  DocumentStatus,
} from "../types/document";

interface DocumentFiltersProps {
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
}

export function DocumentFilters({
  search,
  category,
  status,
  onSearchChange,
  onCategoryChange,
  onStatusChange,
}: DocumentFiltersProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <Input
        placeholder="Search documents..."
        value={search}
        onChange={(e) =>
          onSearchChange(
            e.target.value,
          )
        }
      />

      <Select
        value={category}
        onChange={(e) =>
          onCategoryChange(
            e.target.value as
              | "all"
              | DocumentCategory,
          )
        }
      >
        <option value="all">
          All Categories
        </option>

        {Object.values(
          DocumentCategory,
        ).map((category) => (
          <option
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
      </Select>

      <Select
        value={status}
        onChange={(e) =>
          onStatusChange(
            e.target.value as
              | "all"
              | DocumentStatus,
          )
        }
      >
        <option value="all">
          All Status
        </option>

        {Object.values(
          DocumentStatus,
        ).map((status) => (
          <option
            key={status}
            value={status}
          >
            {status}
          </option>
        ))}
      </Select>
    </div>
  );
}