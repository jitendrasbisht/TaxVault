import { ContentCard } from "@/components/ui";

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
    <ContentCard>

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

              <p className="text-sm text-slate-500">
                Due {item.due}
              </p>
            </div>

            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
              {item.priority}
            </span>

          </div>
        ))}

      </div>

    </ContentCard>
  );
}
