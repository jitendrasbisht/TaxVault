import type { Case } from "../types/case";

export function exportCasesCsv(cases: Case[]) {
  const headers = [
    "ID",
    "Title",
    "Client",
    "Status",
    "Priority",
    "Assigned To",
    "Due Date"
  ];

  const rows = cases.map(c => [
    c.id,
    `"${c.title}"`,
    c.client_id,
    c.status,
    c.priority,
    c.assigned_to ?? "",
    c.due_date ?? ""
  ]);

  const csv = [
    headers.join(","),
    ...rows.map(r => r.join(","))
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "cases.csv";
  link.click();

  URL.revokeObjectURL(link.href);
}
