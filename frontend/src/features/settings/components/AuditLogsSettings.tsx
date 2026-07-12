const auditLogs = [
  {
    user: "Rahul Sharma",
    action: "Updated Client Profile",
    module: "Clients",
    time: "Today • 09:35 AM",
  },
  {
    user: "Priya Gupta",
    action: "Approved GST Filing",
    module: "Cases",
    time: "Today • 10:12 AM",
  },
  {
    user: "Neha Singh",
    action: "Uploaded Documents",
    module: "Documents",
    time: "Yesterday • 04:18 PM",
  },
  {
    user: "Admin",
    action: "Modified Role Permissions",
    module: "Settings",
    time: "Yesterday • 06:42 PM",
  },
];

export default function AuditLogsSettings() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Audit Logs
        </h2>

        <p className="mt-2 text-slate-500">
          Track all important activities performed in TaxVault.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200">

        <table className="min-w-full">

          <thead className="bg-slate-50">

            <tr className="text-left">

              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Activity</th>
              <th className="px-6 py-4">Module</th>
              <th className="px-6 py-4">Time</th>

            </tr>

          </thead>

          <tbody>

            {auditLogs.map((log, index) => (
              <tr
                key={index}
                className="border-t hover:bg-slate-50"
              >
                <td className="px-6 py-5 font-medium">
                  {log.user}
                </td>

                <td className="px-6 py-5">
                  {log.action}
                </td>

                <td className="px-6 py-5">
                  {log.module}
                </td>

                <td className="px-6 py-5 text-slate-500">
                  {log.time}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </>
  );
}