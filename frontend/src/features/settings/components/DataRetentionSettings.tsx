const policies = [
  {
    name: "Client Documents",
    retention: "7 Years",
    status: "Active",
  },
  {
    name: "Audit Logs",
    retention: "10 Years",
    status: "Active",
  },
  {
    name: "Cases",
    retention: "7 Years",
    status: "Active",
  },
  {
    name: "Deleted Records",
    retention: "90 Days",
    status: "Active",
  },
];

export default function DataRetentionSettings() {
  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Data Retention
          </h2>

          <p className="mt-2 text-slate-500">
            Configure automatic retention and archival policies.
          </p>
        </div>

        <button className="rounded-xl bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-800">
          Save Policies
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <table className="min-w-full">

          <thead className="bg-slate-50">
            <tr className="text-left">
              <th className="px-6 py-4">Policy</th>
              <th className="px-6 py-4">Retention</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {policies.map((policy) => (
              <tr
                key={policy.name}
                className="border-t hover:bg-slate-50"
              >
                <td className="px-6 py-5 font-medium">
                  {policy.name}
                </td>

                <td className="px-6 py-5">
                  {policy.retention}
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {policy.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </>
  );
}