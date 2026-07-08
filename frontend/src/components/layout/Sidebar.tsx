function Sidebar() {
  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-slate-800 bg-slate-900 text-white">
      {/* Logo */}
      <div className="border-b border-slate-800 px-6 py-5">
        <h1 className="text-2xl font-bold tracking-tight">
          TaxVault
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Tax Management Platform
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          <li>
            <button className="w-full rounded-lg bg-slate-800 px-4 py-3 text-left transition hover:bg-slate-700">
              Dashboard
            </button>
          </li>

          <li>
            <button className="w-full rounded-lg px-4 py-3 text-left text-slate-300 transition hover:bg-slate-800 hover:text-white">
              Clients
            </button>
          </li>

          <li>
            <button className="w-full rounded-lg px-4 py-3 text-left text-slate-300 transition hover:bg-slate-800 hover:text-white">
              Documents
            </button>
          </li>

          <li>
            <button className="w-full rounded-lg px-4 py-3 text-left text-slate-300 transition hover:bg-slate-800 hover:text-white">
              Reports
            </button>
          </li>

          <li>
            <button className="w-full rounded-lg px-4 py-3 text-left text-slate-300 transition hover:bg-slate-800 hover:text-white">
              Settings
            </button>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-800 p-6 text-sm text-slate-400">
        TaxVault v1.0
      </div>
    </aside>
  );
}

export default Sidebar;