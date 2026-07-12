const apiKeys = [
  {
    name: "Production API",
    key: "tv_prod_xxxxxxxxxxxxx",
    created: "12 Jul 2026",
    status: "Active",
  },
  {
    name: "Development API",
    key: "tv_dev_xxxxxxxxxxxxxx",
    created: "10 Jul 2026",
    status: "Active",
  },
  {
    name: "Legacy API",
    key: "tv_old_xxxxxxxxxxxxxx",
    created: "02 Jun 2026",
    status: "Revoked",
  },
];

export default function APIKeysSettings() {
  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            API Keys
          </h2>

          <p className="mt-2 text-slate-500">
            Manage API access for external integrations.
          </p>
        </div>

        <button className="rounded-xl bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-800">
          Generate API Key
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <table className="min-w-full">

          <thead className="bg-slate-50">
            <tr className="text-left">
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">API Key</th>
              <th className="px-6 py-4">Created</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody>

            {apiKeys.map((api) => (
              <tr
                key={api.name}
                className="border-t hover:bg-slate-50"
              >
                <td className="px-6 py-5 font-medium">
                  {api.name}
                </td>

                <td className="px-6 py-5 font-mono text-sm">
                  {api.key}
                </td>

                <td className="px-6 py-5">
                  {api.created}
                </td>

                <td className="px-6 py-5">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      api.status === "Active"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {api.status}
                  </span>

                </td>

                <td className="px-6 py-5 text-right">

                  <button className="rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-100">
                    Revoke
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>
      </div>
    </>
  );
}