const backups = [
  {
    name: "Daily Backup",
    schedule: "Every Day • 02:00 AM",
    status: "Successful",
  },
  {
    name: "Weekly Backup",
    schedule: "Sunday • 01:00 AM",
    status: "Successful",
  },
  {
    name: "Monthly Backup",
    schedule: "1st Day • 12:00 AM",
    status: "Pending",
  },
];

export default function BackupRecoverySettings() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Backup & Recovery
        </h2>

        <p className="mt-2 text-slate-500">
          Configure automated backups and disaster recovery.
        </p>
      </div>

      <div className="space-y-5">

        {backups.map((backup) => (
          <div
            key={backup.name}
            className="flex items-center justify-between rounded-2xl border border-slate-200 p-6"
          >

            <div>

              <h3 className="font-semibold">
                {backup.name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {backup.schedule}
              </p>

            </div>

            <div className="flex items-center gap-4">

              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  backup.status === "Successful"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {backup.status}
              </span>

              <button className="rounded-xl border border-slate-300 px-4 py-2 hover:bg-slate-100">
                Run Now
              </button>

            </div>

          </div>
        ))}

      </div>

      <div className="mt-10 flex justify-end">

        <button className="rounded-xl bg-slate-900 px-6 py-3 font-medium text-white hover:bg-slate-800">
          Save Backup Settings
        </button>

      </div>
    </>
  );
}