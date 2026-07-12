const templates = [
  {
    name: "Client Welcome",
    category: "Onboarding",
    updated: "2 days ago",
  },
  {
    name: "Document Request",
    category: "Documents",
    updated: "Yesterday",
  },
  {
    name: "GST Filing Reminder",
    category: "Compliance",
    updated: "Today",
  },
  {
    name: "Case Completed",
    category: "Cases",
    updated: "Last Week",
  },
];

export default function EmailTemplatesSettings() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Email Templates
        </h2>

        <p className="mt-2 text-slate-500">
          Manage reusable email templates used across TaxVault.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200">

        <table className="min-w-full">

          <thead className="bg-slate-50">

            <tr className="text-left">

              <th className="px-6 py-4">Template</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Updated</th>
              <th className="px-6 py-4 text-right">Action</th>

            </tr>

          </thead>

          <tbody>

            {templates.map((template) => (
              <tr
                key={template.name}
                className="border-t hover:bg-slate-50"
              >
                <td className="px-6 py-5 font-medium">
                  {template.name}
                </td>

                <td className="px-6 py-5">
                  {template.category}
                </td>

                <td className="px-6 py-5 text-slate-500">
                  {template.updated}
                </td>

                <td className="px-6 py-5 text-right">

                  <button className="rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-100">
                    Edit
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </>
  );
}