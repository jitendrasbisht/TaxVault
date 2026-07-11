import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function ReportFilters() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-1 gap-3">
        <Input
          placeholder="Search reports..."
          className="max-w-sm"
        />

        <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
          <option>All Reports</option>
          <option>Revenue</option>
          <option>Clients</option>
          <option>Compliance</option>
          <option>Documents</option>
        </select>
      </div>

      <div className="flex gap-3">
        <Button variant="outline">
          Reset
        </Button>

        <Button>
          Apply Filters
        </Button>
      </div>
    </div>
  );
}