export default function SecuritySettings() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Security
        </h2>

        <p className="mt-2 text-slate-500">
          Configure authentication and security policies.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl border border-slate-200 p-6">

          <h3 className="font-semibold">
            Two-Factor Authentication
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Require MFA for all administrators.
          </p>

          <button className="mt-6 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white">
            Enable MFA
          </button>

        </div>

        <div className="rounded-2xl border border-slate-200 p-6">

          <h3 className="font-semibold">
            Session Timeout
          </h3>

          <select className="mt-6 w-full rounded-xl border border-slate-300 px-4 py-3">

            <option>15 Minutes</option>

            <option>30 Minutes</option>

            <option>1 Hour</option>

            <option>2 Hours</option>

          </select>

        </div>

        <div className="rounded-2xl border border-slate-200 p-6">

          <h3 className="font-semibold">
            Password Policy
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-slate-600">

            <li>✓ Minimum 8 characters</li>

            <li>✓ Upper & Lowercase</li>

            <li>✓ Numeric</li>

            <li>✓ Special Character</li>

          </ul>

        </div>

        <div className="rounded-2xl border border-slate-200 p-6">

          <h3 className="font-semibold">
            Login History
          </h3>

          <p className="mt-5 text-sm text-slate-500">
            Last Login
          </p>

          <p className="font-semibold">
            Today • 09:15 AM
          </p>

        </div>

      </div>
    </>
  );
}