const permissions = [
  {
    role: "Administrator",
    clients: true,
    cases: true,
    documents: true,
    reports: true,
    settings: true,
  },
  {
    role: "Manager",
    clients: true,
    cases: true,
    documents: true,
    reports: true,
    settings: false,
  },
  {
    role: "Tax Associate",
    clients: false,
    cases: true,
    documents: true,
    reports: false,
    settings: false,
  },
  {
    role: "Reviewer",
    clients: false,
    cases: true,
    documents: true,
    reports: true,
    settings: false,
  },
];

export default function RolesSettings() {
  return (
    <>
      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Roles & Permissions
          </h2>

          <p className="mt-2 text-slate-500">
            Configure access across the platform.
          </p>

        </div>

        <button className="rounded-xl bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-800">
          + New Role
        </button>

      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200">

        <table className="min-w-full">

          <thead className="bg-slate-50">

            <tr className="text-center">

              <th className="px-6 py-4 text-left">
                Role
              </th>

              <th>Clients</th>

              <th>Cases</th>

              <th>Documents</th>

              <th>Reports</th>

              <th>Settings</th>

            </tr>

          </thead>

          <tbody>

            {permissions.map((role) => (
              <tr
                key={role.role}
                className="border-t text-center hover:bg-slate-50"
              >

                <td className="px-6 py-5 text-left font-semibold">
                  {role.role}
                </td>

                <td>{role.clients ? "✅" : "—"}</td>

                <td>{role.cases ? "✅" : "—"}</td>

                <td>{role.documents ? "✅" : "—"}</td>

                <td>{role.reports ? "✅" : "—"}</td>

                <td>{role.settings ? "✅" : "—"}</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </>
  );
}