import { Bell, LogOut, Settings, User } from "lucide-react";

import { Dropdown } from "@/components/ui/Dropdown";
import { useAuth } from "@/features/auth";

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">
          TaxVault
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 transition hover:bg-slate-100">
          <Bell size={18} />
        </button>

        <Dropdown
          label={user?.name ?? "User"}
          items={[
            {
              label: `${user?.email ?? ""}`,
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
    </header>
  );
}

export default Header;