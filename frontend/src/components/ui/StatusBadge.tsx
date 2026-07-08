import { Badge } from "./Badge";

type Status =
  | "success"
  | "warning"
  | "danger"
  | "info";

interface StatusBadgeProps {
  status: Status;
  children: React.ReactNode;
}

const variants = {
  success: "success",
  warning: "warning",
  danger: "danger",
  info: "primary",
} as const;

export function StatusBadge({
  status,
  children,
}: StatusBadgeProps) {
  return (
    <Badge variant={variants[status]}>
      {children}
    </Badge>
  );
}