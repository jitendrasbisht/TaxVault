import { ReactNode } from "react";

interface ComplianceCardHeaderProps {
  title: string;
  action?: ReactNode;
}

export function ComplianceCardHeader({
  title,
  action,
}: ComplianceCardHeaderProps) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      {action}
    </div>
  );
}