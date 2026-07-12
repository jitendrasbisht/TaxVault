const services = [
  {
    name: "API Server",
    status: "Operational",
    uptime: "99.98%",
  },
  {
    name: "Database",
    status: "Operational",
    uptime: "99.99%",
  },
  {
    name: "Document Storage",
    status: "Operational",
    uptime: "100%",
  },
  {
    name: "Notification Service",
    status: "Degraded",
    uptime: "98.65%",
  },
];

export default function SystemHealthSettings() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          System Health
        </h2>

        <p className="mt-2 text-slate-500">
          Monitor TaxVault infrastructure and service availability.
        </p>
      </div>

      <div className="grid gap-6">

        {services.map((service) => (
          <div
            key={service.name}
            className="flex items-center justify-between rounded-2xl border border-slate-200 p-6"
          >
            <div>
              <h3 className="font-semibold">
                {service.name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Uptime • {service.uptime}
              </p>
            </div>

            <span
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                service.status === "Operational"
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-amber-100 text-amber-700"
              }`}
            >
              {service.status}
            </span>
          </div>
        ))}

      </div>
    </>
  );
}