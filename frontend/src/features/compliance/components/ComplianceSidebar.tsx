import { ReactNode } from "react";

interface ComplianceSidebarProps {
  children: ReactNode;
}

export function ComplianceSidebar({
  children,
}: ComplianceSidebarProps) {
  return (
    <aside className="space-y-6">
      {children}
    </aside>
  );
}