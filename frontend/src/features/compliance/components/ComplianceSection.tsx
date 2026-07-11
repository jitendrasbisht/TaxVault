import { ReactNode } from "react";

interface ComplianceSectionProps {
  title: string;
  children: ReactNode;
}

export function ComplianceSection({
  title,
  children,
}: ComplianceSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">
        {title}
      </h2>

      {children}
    </section>
  );
}