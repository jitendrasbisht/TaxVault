const teamMembers = [
  {
    name: "Rahul Sharma",
    role: "Administrator",
    email: "rahul@taxvault.com",
    status: "Active",
  },
  {
    name: "Priya Gupta",
    role: "Manager",
    email: "priya@taxvault.com",
    status: "Active",
  },
  {
    name: "Amit Verma",
    role: "Tax Associate",
    email: "amit@taxvault.com",
    status: "Pending",
  },
  {
    name: "Neha Singh",
    role: "Reviewer",
    email: "neha@taxvault.com",
    status: "Active",
  },
];

export default function UsersSettings() {
  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Users & Teams
          </h2>

          <p className="mt-2 text-slate-500">
            Manage users and their access to TaxVault.
          </p>
        </div>

        <button className="rounded-xl bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-800">
          + Invite User
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <table className="min-w-full">

          <thead className="bg-slate-50">

            <tr className="text-left">

              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Action</th>

            </tr>

          </thead>

          <tbody>

            {teamMembers.map((user) => (
              <tr
                key={user.email}
                className="border-t hover:bg-slate-50"
              >
                <td className="px-6 py-5">

                  <div>

                    <div className="font-semibold">
                      {user.name}
                    </div>

                    <div className="text-sm text-slate-500">
                      {user.email}
                    </div>

                  </div>

                </td>

                <td className="px-6 py-5">
                  {user.role}
                </td>

                <td className="px-6 py-5">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      user.status === "Active"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {user.status}
                  </span>

                </td>

                <td className="px-6 py-5 text-right">

                  <button className="rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-100">
                    Manage
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