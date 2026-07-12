export default function AboutSettings() {
  return (
    <>
      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          About TaxVault
        </h2>

        <p className="mt-2 text-slate-500">
          Product information and system details.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl border border-slate-200 p-6">

          <p className="text-sm text-slate-500">
            Product
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            TaxVault Enterprise
          </h3>

        </div>

        <div className="rounded-2xl border border-slate-200 p-6">

          <p className="text-sm text-slate-500">
            Version
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            v1.0.0
          </h3>

        </div>

        <div className="rounded-2xl border border-slate-200 p-6">

          <p className="text-sm text-slate-500">
            Build
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            Production
          </h3>

        </div>

        <div className="rounded-2xl border border-slate-200 p-6">

          <p className="text-sm text-slate-500">
            License
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            Enterprise
          </h3>

        </div>

      </div>
    </>
  );
}