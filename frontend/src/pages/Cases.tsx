import {
  AlertTriangle,
  Briefcase,
  CalendarClock,
  CheckCircle2,
  Clock3,
  Filter,
  Plus,
  Search,
  SlidersHorizontal,
  TrendingUp,
} from "lucide-react";

import { PageHeader } from "@/components/ui/PageHeader";

const summary = [
  {
    title: "Total Cases",
    value: "248",
    icon: Briefcase,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "In Progress",
    value: "82",
    icon: Clock3,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    title: "Due This Week",
    value: "19",
    icon: CalendarClock,
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    title: "Completed",
    value: "147",
    icon: CheckCircle2,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
];

const cases = [
  {
    client: "ABC Manufacturing Pvt Ltd",
    type: "GST Filing",
    owner: "Rahul",
    priority: "High",
    status: "In Progress",
    due: "18 Jul 2026",
  },
  {
    client: "Zen Technologies",
    type: "Income Tax",
    owner: "Priya",
    priority: "Medium",
    status: "Review",
    due: "20 Jul 2026",
  },
  {
    client: "Global Traders",
    type: "Audit",
    owner: "Amit",
    priority: "Critical",
    status: "Pending",
    due: "15 Jul 2026",
  },
  {
    client: "NextGen Solutions",
    type: "TDS Return",
    owner: "Neha",
    priority: "Low",
    status: "Completed",
    due: "11 Jul 2026",
  },
];

const recentActivity = [
  {
    title: "GST Filing submitted",
    client: "ABC Manufacturing",
    time: "5 min ago",
    color: "bg-emerald-500",
  },
  {
    title: "Notice uploaded",
    client: "Global Traders",
    time: "22 min ago",
    color: "bg-blue-500",
  },
  {
    title: "Client replied",
    client: "Zen Technologies",
    time: "1 hour ago",
    color: "bg-amber-500",
  },
  {
    title: "Assessment reopened",
    client: "NextGen Solutions",
    time: "Today",
    color: "bg-red-500",
  },
];

const deadlines = [
  {
    title: "GST Return",
    date: "Today",
    color: "bg-red-500",
  },
  {
    title: "Income Tax Return",
    date: "Tomorrow",
    color: "bg-amber-500",
  },
  {
    title: "Audit Report",
    date: "15 Jul",
    color: "bg-blue-500",
  },
  {
    title: "TDS Filing",
    date: "18 Jul",
    color: "bg-emerald-500",
  },
];

const workload = [
  {
    name: "Rahul",
    progress: "80%",
    width: "80%",
  },
  {
    name: "Priya",
    progress: "60%",
    width: "60%",
  },
  {
    name: "Amit",
    progress: "95%",
    width: "95%",
  },
  {
    name: "Neha",
    progress: "40%",
    width: "40%",
  },
];

function badge(priority: string) {
  switch (priority) {
    case "Critical":
      return "bg-red-100 text-red-700";
    case "High":
      return "bg-orange-100 text-orange-700";
    case "Medium":
      return "bg-amber-100 text-amber-700";
    default:
      return "bg-emerald-100 text-emerald-700";
  }
}

function status(status: string) {
  switch (status) {
    case "Completed":
      return "bg-emerald-100 text-emerald-700";
    case "In Progress":
      return "bg-blue-100 text-blue-700";
    case "Review":
      return "bg-violet-100 text-violet-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

function Cases() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Cases"
        description="Manage tax cases, priorities and deadlines."
      />

      {/* Summary Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {summary.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-slate-900">
                    {item.value}
                  </h2>
                </div>

                <div
                  className={`rounded-xl p-3 ${item.bg}`}
                >
                  <Icon
                    className={item.color}
                    size={24}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Case Command Center */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Case Command Center
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Quickly search, filter and manage ongoing engagements.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                placeholder="Search cases..."
                className="h-11 w-72 rounded-xl border border-slate-300 pl-10 pr-4 outline-none transition focus:border-blue-600"
              />
            </div>

            <button className="flex h-11 items-center gap-2 rounded-xl border border-slate-300 px-4 hover:bg-slate-100">
              <Filter size={17} />
              Filter
            </button>

            <button className="flex h-11 items-center gap-2 rounded-xl border border-slate-300 px-4 hover:bg-slate-100">
              <SlidersHorizontal size={17} />
              Sort
            </button>

            <button className="flex h-11 items-center gap-2 rounded-xl bg-slate-900 px-5 font-medium text-white transition hover:bg-slate-800">
              <Plus size={17} />
              New Case
            </button>
          </div>
        </div>
      </div>

      {/* Quick Metrics Grid */}
      <div className="grid gap-5 lg:grid-cols-4">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white">
          <TrendingUp className="mb-4" />
          <div className="text-3xl font-bold">
            92%
          </div>
          <p className="mt-2 text-blue-100">
            SLA Compliance
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="text-3xl font-bold text-slate-900">
            11
          </div>
          <p className="mt-2 text-slate-500">
            High Priority Cases
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="text-3xl font-bold text-slate-900">
            6
          </div>
          <p className="mt-2 text-slate-500">
            Awaiting Client Action
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="text-3xl font-bold text-slate-900">
            4
          </div>
          <p className="mt-2 text-slate-500">
            Due Today
          </p>
        </div>
      </div>

      {/* Cases Table Section */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-slate-50">
              <tr className="text-left text-sm text-slate-600">
                <th className="px-6 py-4">Client</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Owner</th>
                <th className="px-6 py-4">Priority</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Due Date</th>
              </tr>
            </thead>

            <tbody>
              {cases.map((item) => (
                <tr
                  key={item.client}
                  className="group cursor-pointer border-t border-slate-100 transition-all duration-200 hover:bg-blue-50"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                        {item.client.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 group-hover:text-blue-700">
                          {item.client}
                        </div>
                        <div className="mt-1 text-xs text-slate-500">
                          Case ID • TV-{Math.floor(Math.random() * 9000 + 1000)}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-5 font-medium">
                    {item.type}
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                        {item.owner.charAt(0)}
                      </div>
                      <span>{item.owner}</span>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${badge(
                        item.priority,
                      )}`}
                    >
                      {item.priority}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${status(
                        item.status,
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        {item.priority === "Critical" && (
                          <AlertTriangle
                            size={15}
                            className="text-red-500"
                          />
                        )}
                        <span>{item.due}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                        <div
                          className={`h-full rounded-full ${
                            item.status === "Completed"
                              ? "w-full bg-emerald-500"
                              : item.status === "In Progress"
                              ? "w-2/3 bg-blue-500"
                              : item.status === "Review"
                              ? "w-4/5 bg-violet-500"
                              : "w-1/3 bg-amber-500"
                          }`}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Activity, Deadlines, and Workload Grid */}
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Recent Activities
          </h2>
          <div className="mt-6 space-y-5">
            {recentActivity.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4"
              >
                <div className={`mt-2 h-3 w-3 rounded-full ${item.color}`} />
                <div className="flex-1">
                  <p className="font-medium text-slate-900">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {item.client}
                  </p>
                </div>
                <span className="text-sm text-slate-400">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Upcoming Deadlines
            </h2>
            <div className="mt-6 space-y-4">
              {deadlines.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-3 w-3 rounded-full ${item.color}`} />
                    <span className="font-medium">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-sm text-slate-500">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Team Workload
            </h2>
            <div className="mt-6 space-y-5">
              {workload.map((item) => (
                <div key={item.name}>
                  <div className="mb-2 flex justify-between">
                    <span className="font-medium">
                      {item.name}
                    </span>
                    <span className="text-sm text-slate-500">
                      {item.progress}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-blue-600"
                      style={{
                        width: item.width,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cases;