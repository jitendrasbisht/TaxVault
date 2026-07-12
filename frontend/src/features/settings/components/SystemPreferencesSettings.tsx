export default function SystemPreferencesSettings() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          System Preferences
        </h2>

        <p className="mt-2 text-slate-500">
          Configure application-wide defaults and regional settings.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-2xl border border-slate-200 p-6">
          <label className="mb-2 block text-sm font-medium">
            Time Zone
          </label>

          <select className="w-full rounded-xl border border-slate-300 px-4 py-3">
            <option>Asia/Kolkata (IST)</option>
            <option>UTC</option>
            <option>Europe/London</option>
          </select>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <label className="mb-2 block text-sm font-medium">
            Financial Year
          </label>

          <select className="w-full rounded-xl border border-slate-300 px-4 py-3">
            <option>April - March</option>
            <option>January - December</option>
          </select>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <label className="mb-2 block text-sm font-medium">
            Default Currency
          </label>

          <select className="w-full rounded-xl border border-slate-300 px-4 py-3">
            <option>Indian Rupee (₹)</option>
            <option>US Dollar ($)</option>
          </select>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <label className="mb-2 block text-sm font-medium">
            Date Format
          </label>

          <select className="w-full rounded-xl border border-slate-300 px-4 py-3">
            <option>DD/MM/YYYY</option>
            <option>MM/DD/YYYY</option>
            <option>YYYY-MM-DD</option>
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