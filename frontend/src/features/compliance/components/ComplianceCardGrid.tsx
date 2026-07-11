import { ReactNode } from "react";

interface ComplianceCardGridProps {
  children: ReactNode;
}

export function ComplianceCardGrid({
  children,
}: ComplianceCardGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {children}
    </div>
  );
}