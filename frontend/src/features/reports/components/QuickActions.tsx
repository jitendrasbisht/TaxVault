import {
  Download,
  FilePlus2,
  FileSpreadsheet,
  Filter,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function QuickActions() {
  return (
    <Card className="p-6">
      <h3 className="mb-6 text-lg font-semibold">
        Quick Actions
      </h3>

      <div className="grid gap-4 sm:grid-cols-2">
        <Button className="justify-start">
          <Download className="mr-2 h-4 w-4" />
          Export Dashboard
        </Button>

        <Button variant="outline" className="justify-start">
          <FileSpreadsheet className="mr-2 h-4 w-4" />
          Excel Report
        </Button>

        <Button variant="outline" className="justify-start">
          <FilePlus2 className="mr-2 h-4 w-4" />
          Create Report
        </Button>

        <Button variant="outline" className="justify-start">
          <Filter className="mr-2 h-4 w-4" />
          Saved Filters
        </Button>
      </div>
    </Card>
  );
}