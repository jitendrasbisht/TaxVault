import type { Case } from "../types/case";

interface Props {
  cases: Case[];
}

export default function CaseSummary({ cases }: Props) {
  const open = cases.filter(c => c.status === "OPEN").length;
  const progress = cases.filter(c => c.status === "IN_PROGRESS").length;
  const completed = cases.filter(c => c.status === "COMPLETED").length;
  const closed = cases.filter(c => c.status === "CLOSED").length;

  const cards = [
    ["Total", cases.length],
    ["Open", open],
    ["In Progress", progress],
    ["Completed", completed],
    ["Closed", closed],
  ];

  return (
    <div className="mb-6 grid grid-cols-5 gap-4">
      {cards.map(([label, value]) => (
        <div key={String(label)} className="rounded-lg border p-4 shadow-sm">
          <div className="text-sm text-gray-500">{label}</div>
          <div className="mt-2 text-2xl font-bold">{value}</div>
        </div>
      ))}
    </div>
  );
}
