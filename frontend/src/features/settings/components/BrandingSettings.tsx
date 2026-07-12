export default function BrandingSettings() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Branding
        </h2>

        <p className="mt-2 text-slate-500">
          Customize your organization's branding.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-2xl border border-slate-200 p-6">

          <h3 className="font-semibold">
            Company Logo
          </h3>

          <div className="mt-6 flex h-48 items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50">

            <div className="text-center">

              <p className="font-medium">
                Upload Logo
              </p>

              <p className="mt-2 text-sm text-slate-500">
                PNG, JPG or SVG
              </p>

            </div>

          </div>

        </div>

        <div className="rounded-2xl border border-slate-200 p-6">

          <h3 className="font-semibold">
            Accent Color
          </h3>

          <div className="mt-6 flex gap-4">

            <button className="h-12 w-12 rounded-full bg-blue-600 ring-4 ring-blue-100" />

            <button className="h-12 w-12 rounded-full bg-emerald-600" />

            <button className="h-12 w-12 rounded-full bg-violet-600" />

            <button className="h-12 w-12 rounded-full bg-amber-500" />

            <button className="h-12 w-12 rounded-full bg-rose-600" />

          </div>

        </div>

      </div>

      <div className="mt-8 flex justify-end">

        <button className="rounded-xl bg-slate-900 px-6 py-3 font-medium text-white hover:bg-slate-800">
          Save Branding
        </button>

      </div>
    </>
  );
}