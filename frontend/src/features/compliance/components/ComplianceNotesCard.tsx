import { Card } from "@/components/ui/Card";

interface ComplianceNotesCardProps {
  notes: string;
}

export function ComplianceNotesCard({
  notes,
}: ComplianceNotesCardProps) {
  return (
    <Card className="p-5">
      <h3 className="mb-3 text-lg font-semibold">
        Notes
      </h3>

      <p className="text-sm leading-6 text-slate-600">
        {notes || "No notes available."}
      </p>
    </Card>
  );
}