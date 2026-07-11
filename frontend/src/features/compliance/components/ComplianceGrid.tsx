import { ReactNode } from "react";

interface ComplianceGridProps {
  children: ReactNode;
}

export function ComplianceGrid({
  children,
}: ComplianceGridProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {children}
    </div>
  );
}