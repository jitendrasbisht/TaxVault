import { ReactNode } from "react";

import { Card } from "@/components/ui/Card";

interface ComplianceWidgetProps {
  title: string;
  children: ReactNode;
}

export function ComplianceWidget({
  title,
  children,
}: ComplianceWidgetProps) {
  return (
    <Card className="space-y-5 p-6">
      <h2 className="text-lg font-semibold">
        {title}
      </h2>

      {children}
    </Card>
  );
}