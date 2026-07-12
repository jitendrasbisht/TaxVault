const licenses = [
  {
    feature: "Enterprise Users",
    value: "100 Seats",
    usage: "38 Used",
  },
  {
    feature: "Document Storage",
    value: "500 GB",
    usage: "124 GB Used",
  },
  {
    feature: "API Requests",
    value: "1,000,000 / Month",
    usage: "186,520 Used",
  },
  {
    feature: "Active Clients",
    value: "Unlimited",
    usage: "1,254 Clients",
  },
];

export default function LicensingSettings() {
  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Licensing
          </h2>

          <p className="mt-2 text-slate-500">
            View your TaxVault Enterprise license usage.
          </p>
        </div>

        <button className="rounded-xl bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-800">
          Upgrade Plan
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {licenses.map((item) => (
          <div
            key={item.feature}
            className="rounded-2xl border border-slate-200 p-6"
          >
            <p className="text-sm text-slate-500">
              {item.feature}
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              {item.value}
            </h3>

            <p className="mt-4 text-sm text-blue-600">
              {item.usage}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}