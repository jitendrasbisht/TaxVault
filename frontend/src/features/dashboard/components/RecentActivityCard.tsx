import { ContentCard } from "@/components/ui";

const activities = [
  {
    title: "GST Return Filed",
    client: "ABC Manufacturing",
    time: "10 mins ago",
  },
  {
    title: "New Client Added",
    client: "XYZ Industries",
    time: "35 mins ago",
  },
  {
    title: "Documents Uploaded",
    client: "Apex Solutions",
    time: "1 hour ago",
  },
  {
    title: "ITR Case Completed",
    client: "Rahul Sharma",
    time: "Today",
  },
];

export default function RecentActivityCard() {
  return (
    <ContentCard>

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          Recent Activity
        </h2>

        <button className="text-sm font-medium text-blue-600">
          View All
        </button>
      </div>

      <div className="space-y-5">
        {activities.map((activity) => (
          <div
            key={activity.title}
            className="flex items-start justify-between"
          >
            <div>
              <h3 className="font-medium">
                {activity.title}
              </h3>

              <p className="text-sm text-slate-500">
                {activity.client}
              </p>
            </div>

            <span className="text-xs text-slate-400">
              {activity.time}
            </span>

          </div>
        ))}
      </div>

    </ContentCard>
  );
}
