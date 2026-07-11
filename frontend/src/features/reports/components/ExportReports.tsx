import {
  Download,
  FileSpreadsheet,
  FileText,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function ExportReports() {
  return (
    <Card className="p-6">
      <div className="mb-5 flex items-center gap-3">
        <Download className="h-6 w-6 text-indigo-600" />

        <div>
          <h3 className="text-lg font-semibold">
            Export Reports
          </h3>

          <p className="text-sm text-slate-500">
            Download executive reports
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button>
          <FileSpreadsheet className="mr-2 h-4 w-4" />
          Excel
        </Button>

        <Button variant="outline">
          <FileText className="mr-2 h-4 w-4" />
          PDF
        </Button>

        <Button variant="outline">
          CSV
        </Button>
      </div>
    </Card>
  );
}