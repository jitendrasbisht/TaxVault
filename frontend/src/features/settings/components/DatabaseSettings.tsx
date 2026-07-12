const databases = [
  {
    name: "Primary Database",
    engine: "PostgreSQL 17",
    status: "Healthy",
    size: "18.6 GB",
  },
  {
    name: "Analytics Database",
    engine: "PostgreSQL 17",
    status: "Healthy",
    size: "6.2 GB",
  },
  {
    name: "Redis Cache",
    engine: "Redis",
    status: "Healthy",
    size: "512 MB",
  },
  {
    name: "Document Storage",
    engine: "S3 Storage",
    status: "Healthy",
    size: "124 GB",
  },
];

export default function DatabaseSettings() {
  return (
    <>
      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Database
          </h2>

          <p className="mt-2 text-slate-500">
            Monitor database usage and storage health.
          </p>

        </div>

        <button className="rounded-xl bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-800">
          Optimize Database
        </button>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {databases.map((db) => (
          <div
            key={db.name}
            className="rounded-2xl border border-slate-200 p-6"
          >
            <h3 className="font-semibold">
              {db.name}
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              {db.engine}
            </p>

            <div className="mt-6 flex items-center justify-between">

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                {db.status}
              </span>

              <span className="text-sm font-medium text-slate-600">
                {db.size}
              </span>

            </div>

          </div>
        ))}

      </div>
    </>
  );
}