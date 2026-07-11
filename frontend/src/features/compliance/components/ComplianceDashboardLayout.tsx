import { ReactNode } from "react";

interface ComplianceDashboardLayoutProps {
  left: ReactNode;
  right: ReactNode;
}

export function ComplianceDashboardLayout({
  left,
  right,
}: ComplianceDashboardLayoutProps) {
  return (
    <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
      <div>{left}</div>

      <div className="space-y-6">
        {right}
      </div>
    </div>
  );
}