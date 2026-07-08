import { Bell } from "lucide-react";

function Header() {
  return (
    <header className="flex h-16 items-center justify-end border-b border-slate-200 bg-white px-8">
      <div className="flex items-center gap-4">
        <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 transition hover:bg-slate-100">
          <Bell size={18} />
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-semibold text-white">
          J
        </div>
      </div>
    </header>
  );
}

export default Header;