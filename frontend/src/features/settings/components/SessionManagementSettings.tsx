const sessions = [
  {
    device: "Windows 11 • Chrome",
    location: "New Delhi, India",
    lastActive: "Current Session",
    status: "Active",
  },
  {
    device: "MacBook Pro • Safari",
    location: "Mumbai, India",
    lastActive: "Yesterday",
    status: "Active",
  },
  {
    device: "iPhone 16 • Safari",
    location: "Delhi, India",
    lastActive: "2 Days Ago",
    status: "Expired",
  },
];

export default function SessionManagementSettings() {
  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Session Management
          </h2>

          <p className="mt-2 text-slate-500">
            View and terminate active user sessions.
          </p>
        </div>

        <button className="rounded-xl bg-red-600 px-5 py-3 font-medium text-white hover:bg-red-700">
          Logout All Devices
        </button>
      </div>

      <div className="space-y-5">
        {sessions.map((session) => (
          <div
            key={session.device}
            className="flex items-center justify-between rounded-2xl border border-slate-200 p-6"
          >
            <div>
              <h3 className="font-semibold">
                {session.device}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {session.location}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                {session.lastActive}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  session.status === "Active"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-slate-200 text-slate-700"
                }`}
              >
                {session.status}
              </span>

              <button className="rounded-xl border border-slate-300 px-4 py-2 hover:bg-slate-100">
                End Session
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}