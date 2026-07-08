function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8">
      {/* Page Title */}
      <div>
        <h2 className="text-xl font-semibold text-slate-900">
          Dashboard
        </h2>

        <p className="text-sm text-slate-500">
          Welcome to TaxVault
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm transition hover:bg-slate-100">
          Notifications
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-semibold text-white">
          J
        </div>
      </div>
    </header>
  );
}

export default Header;