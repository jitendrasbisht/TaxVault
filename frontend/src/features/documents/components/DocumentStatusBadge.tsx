import { Badge } from "@/components/ui/Badge";

import { DocumentStatus } from "../types/document";

interface Props {
  status: DocumentStatus;
}

const variantMap = {
  [DocumentStatus.DRAFT]:
    "warning",

  [DocumentStatus.PENDING_REVIEW]:
    "outline",

  [DocumentStatus.APPROVED]:
    "success",

  [DocumentStatus.ARCHIVED]:
    "default",
} as const;

export function DocumentStatusBadge({
  status,
}: Props) {
  return (
    <Badge
      variant={variantMap[status]}
    >
      {status.replaceAll("_", " ")}
    </Badge>
  );
}