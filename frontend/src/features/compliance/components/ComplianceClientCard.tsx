import { Building2 } from "lucide-react";

import { Card } from "@/components/ui/Card";

interface ComplianceClientCardProps {
  client: string;
}

export function ComplianceClientCard({
  client,
}: ComplianceClientCardProps) {
  return (
    <Card className="flex items-center gap-4 p-4">
      <Building2 className="h-8 w-8 text-slate-500" />

      <div>
        <p className="text-xs uppercase tracking-wide text-slate-500">
          Client
        </p>

        <p className="font-semibold">{client}</p>
      </div>
    </Card>
  );
}