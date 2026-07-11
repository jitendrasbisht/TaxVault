import { Eye, Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/Button";

interface ComplianceActionsProps {
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export function ComplianceActions({
  onView,
  onEdit,
  onDelete,
}: ComplianceActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        size="icon"
        variant="ghost"
        onClick={onView}
      >
        <Eye className="h-4 w-4" />
      </Button>

      <Button
        size="icon"
        variant="ghost"
        onClick={onEdit}
      >
        <Pencil className="h-4 w-4" />
      </Button>

      <Button
        size="icon"
        variant="ghost"
        onClick={onDelete}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}