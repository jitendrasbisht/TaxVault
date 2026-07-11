import { ReactNode } from "react";

interface ComplianceContentProps {
  children: ReactNode;
}

export function ComplianceContent({
  children,
}: ComplianceContentProps) {
  return (
    <div className="space-y-8">
      {children}
    </div>
  );
}