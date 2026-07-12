export default function PreferencesSettings() {
  return (
    <>
      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Preferences
        </h2>

        <p className="mt-2 text-slate-500">
          Configure application defaults.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 block text-sm font-medium">
            Default Dashboard
          </label>

          <select className="w-full rounded-xl border border-slate-300 px-4 py-3">

            <option>Executive Dashboard</option>

            <option>Reports Dashboard</option>

          </select>

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Language
          </label>

          <select className="w-full rounded-xl border border-slate-300 px-4 py-3">

            <option>English</option>

            <option>Hindi</option>

          </select>

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Date Format
          </label>

          <select className="w-full rounded-xl border border-slate-300 px-4 py-3">

            <option>DD/MM/YYYY</option>

            <option>MM/DD/YYYY</option>

          </select>

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Currency
          </label>

          <select className="w-full rounded-xl border border-slate-300 px-4 py-3">

            <option>INR (₹)</option>

            <option>USD ($)</option>

          </select>

        </div>

      </div>

      <div className="mt-8 flex justify-end">

        <button className="rounded-xl bg-slate-900 px-6 py-3 font-medium text-white hover:bg-slate-800">
          Save Preferences
        </button>

      </div>
    </>
  );
}