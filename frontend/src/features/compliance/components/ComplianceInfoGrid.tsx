import { ReactNode } from "react";

interface ComplianceInfoGridProps {
  children: ReactNode;
}

export function ComplianceInfoGrid({
  children,
}: ComplianceInfoGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {children}
    </div>
  );
}