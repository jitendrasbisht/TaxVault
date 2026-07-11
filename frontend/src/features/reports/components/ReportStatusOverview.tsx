import { Card } from "@/components/ui/Card";

const reports = [
  {
    title: "Revenue Report",
    status: "Completed",
  },
  {
    title: "Compliance Report",
    status: "Completed",
  },
  {
    title: "Client Report",
    status: "Running",
  },
  {
    title: "Document Report",
    status: "Scheduled",
  },
];

export function ReportStatusOverview() {
  return (
    <Card className="p-6">
      <h3 className="mb-6 text-lg font-semibold">
        Report Status
      </h3>

      <div className="space-y-4">
        {reports.map((report) => (
          <div
            key={report.title}
            className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0"
          >
            <span>{report.title}</span>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">
              {report.status}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}