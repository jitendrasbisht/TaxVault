const integrations = [
  {
    name: "Microsoft Outlook",
    description: "Calendar & email synchronization",
    status: "Connected",
  },
  {
    name: "Google Drive",
    description: "Document storage",
    status: "Connected",
  },
  {
    name: "Dropbox",
    description: "Cloud backup",
    status: "Disconnected",
  },
  {
    name: "Slack",
    description: "Team notifications",
    status: "Disconnected",
  },
];

export default function IntegrationSettings() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Integrations
        </h2>

        <p className="mt-2 text-slate-500">
          Connect TaxVault with third-party services.
        </p>
      </div>

      <div className="space-y-5">
        {integrations.map((integration) => (
          <div
            key={integration.name}
            className="flex items-center justify-between rounded-2xl border border-slate-200 p-6"
          >
            <div>
              <h3 className="font-semibold">
                {integration.name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {integration.description}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  integration.status === "Connected"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-slate-200 text-slate-700"
                }`}
              >
                {integration.status}
              </span>

              <button className="rounded-xl border border-slate-300 px-4 py-2 hover:bg-slate-100">
                {integration.status === "Connected"
                  ? "Manage"
                  : "Connect"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}