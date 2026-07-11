import { ReactNode } from "react";

interface CompliancePageContainerProps {
  children: ReactNode;
}

export function CompliancePageContainer({
  children,
}: CompliancePageContainerProps) {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
      {children}
    </div>
  );
}