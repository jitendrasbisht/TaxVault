const notifications = [
  {
    title: "Case Assignment",
    description: "Notify users when a case is assigned.",
    enabled: true,
  },
  {
    title: "Compliance Deadlines",
    description: "Reminder before compliance due dates.",
    enabled: true,
  },
  {
    title: "Document Uploads",
    description: "Notify when documents are uploaded.",
    enabled: false,
  },
  {
    title: "Weekly Reports",
    description: "Receive weekly executive summaries.",
    enabled: true,
  },
  {
    title: "Security Alerts",
    description: "Notify for suspicious login attempts.",
    enabled: true,
  },
];

export default function NotificationsSettings() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Notifications
        </h2>

        <p className="mt-2 text-slate-500">
          Configure email and application notifications.
        </p>
      </div>

      <div className="space-y-4">
        {notifications.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between rounded-2xl border border-slate-200 p-5"
          >
            <div>
              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {item.description}
              </p>
            </div>

            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                defaultChecked={item.enabled}
                className="peer sr-only"
              />

              <div className="peer h-6 w-11 rounded-full bg-slate-300 transition peer-checked:bg-blue-600 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-5" />
            </label>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-end">
        <button className="rounded-xl bg-slate-900 px-6 py-3 font-medium text-white hover:bg-slate-800">
          Save Notification Settings
        </button>
      </div>
    </>
  );
}