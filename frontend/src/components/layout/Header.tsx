import {

  Search,
  Plus,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

import { Dropdown } from "@/components/ui/Dropdown";
import { useAuth } from "@/features/auth";
import {
  NotificationBadge,
  NotificationPanel,
  getUnreadCount,
  useNotifications,
} from "@/features/notifications";

function Header() {
  const { user, logout } = useAuth();
  const { notifications } = useNotifications();

  const [openNotifications, setOpenNotifications] = useState(false);

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

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Sparkles
              size={18}
              className="text-amber-500"
            />

            <h1 className="text-2xl font-bold text-slate-900">
              {greeting},{" "}
              {user?.name?.split(" ")[0] ?? "User"} ??
            </h1>
          </div>

          <p className="text-sm text-slate-500">
            Welcome back to TaxVault.
            Monitor your practice, compliance
            and business performance.
          </p>
        </div>

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

          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setOpenNotifications(!openNotifications)
              }
            >
              <NotificationBadge
                count={getUnreadCount(notifications)}
              />
            </button>

            <NotificationPanel
              open={openNotifications}
            />
          </div>

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
