import {
  DocumentCategory,
  DocumentStatus,
} from "../types/document";

import { DocumentFilters } from "./DocumentFilters";

interface Props {
  value: string;
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

export function DocumentSearch(
  props: Props,
) {
  return (
    <DocumentFilters
      search={props.value}
      category={props.category}
      status={props.status}
      onSearchChange={
        props.onSearchChange
      }
      onCategoryChange={
        props.onCategoryChange
      }
      onStatusChange={
        props.onStatusChange
      }
    />
  );
}