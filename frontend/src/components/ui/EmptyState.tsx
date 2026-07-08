import { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({
  title,
  description,
  icon,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-10 text-center shadow-sm",
        className
      )}
    >
      {icon && <div className="mb-4 text-slate-400">{icon}</div>}

      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

      {description && (
        <p className="mt-2 max-w-md text-sm text-slate-500">
          {description}
        </p>
      )}

      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}