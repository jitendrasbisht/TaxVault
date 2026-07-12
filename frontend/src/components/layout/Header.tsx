import {
  Bell,
  Search,
  Plus,
  Sparkles,
} from "lucide-react";

import { Dropdown } from "@/components/ui/Dropdown";
import { useAuth } from "@/features/auth";

function Header() {
  const { user, logout } = useAuth();

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
        ? "Good Afternoon"
        : "Good Evening";

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="flex h-20 items-center justify-between px-8">

        {/* Left */}

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Sparkles
              size={18}
              className="text-amber-500"
            />

            <h1 className="text-2xl font-bold text-slate-900">
              {greeting},{" "}
              {user?.name?.split(" ")[0] ?? "User"} 👋
            </h1>
          </div>

          <p className="text-sm text-slate-500">
            Welcome back to TaxVault.
            Monitor your practice, compliance
            and business performance.
          </p>
        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          <div className="relative hidden lg:block">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              placeholder="Search clients, cases, documents..."
              className="h-11 w-80 rounded-xl border border-slate-300 bg-slate-50 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
            />
          </div>

          <button className="flex h-11 items-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-medium text-white transition hover:bg-slate-800">
            <Plus size={16} />
            New
          </button>

          <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 transition hover:bg-slate-100">
            <Bell size={18} />

            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500" />
          </button>

          <Dropdown
            label={user?.name ?? "User"}
            items={[
              {
                label: user?.email ?? "",
                onClick: () => {},
              },
              {
                label: "Profile",
                onClick: () => {},
              },
              {
                label: "Settings",
                onClick: () => {},
              },
              {
                label: "Logout",
                onClick: logout,
              },
            ]}
          />

        </div>
      </div>
    </header>
  );
}

export default Header;
