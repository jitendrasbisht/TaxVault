export default function OrganizationSettings() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold text-slate-900">
        Organization Profile
      </h2>

      <p className="mt-2 text-slate-500">
        Configure your organization details used across TaxVault.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-medium">
            Organization Name
          </label>

          <input
            defaultValue="ABC Tax Consultants Pvt Ltd"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            GST Number
          </label>

          <input
            defaultValue="07ABCDE1234F1Z5"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            PAN
          </label>

          <input
            defaultValue="ABCDE1234F"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Financial Year
          </label>

          <select className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600">
            <option>2026-2027</option>
            <option>2025-2026</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Contact Email
          </label>

          <input
            defaultValue="contact@abctax.com"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Contact Number
          </label>

          <input
            defaultValue="+91 98765 43210"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Registered Address
          </label>

          <textarea
            rows={4}
            defaultValue="New Delhi, India"
            className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600"
          />
        </div>

      </div>

      <div className="mt-10 flex justify-end">

        <button className="rounded-xl bg-slate-900 px-6 py-3 font-medium text-white hover:bg-slate-800">
          Save Changes
        </button>

      </div>

    </section>
  );
}