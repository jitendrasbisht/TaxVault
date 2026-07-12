const deadlines = [
  {
    title: "GST Filing",
    due: "15 Jul",
    priority: "High",
  },
  {
    title: "TDS Return",
    due: "20 Jul",
    priority: "Medium",
  },
  {
    title: "ROC Filing",
    due: "24 Jul",
    priority: "Low",
  },
];

export default function UpcomingDeadlinesCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold">
        Upcoming Deadlines
      </h2>

      <div className="space-y-5">
        {deadlines.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between"
          >
            <div>
              <h3 className="font-medium">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Due {item.due}
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                item.priority === "High"
                  ? "bg-red-100 text-red-700"
                  : item.priority === "Medium"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-emerald-100 text-emerald-700"
              }`}
            >
              {item.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}