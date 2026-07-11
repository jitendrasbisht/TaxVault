import { ReactNode } from "react";

interface CompliancePageLayoutProps {
  children: ReactNode;
}

export function CompliancePageLayout({
  children,
}: CompliancePageLayoutProps) {
  return (
    <div className="space-y-8">
      {children}
    </div>
  );
}