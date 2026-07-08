import {
  Briefcase,
  FileText,
  FolderOpen,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Clients",
    href: "/clients",
    icon: Users,
  },
  {
    name: "Cases",
    href: "/cases",
    icon: Briefcase,
  },
  {
    name: "Documents",
    href: "/documents",
    icon: FolderOpen,
  },
  {
    name: "Reports",
    href: "/reports",
    icon: FileText,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

function Sidebar() {
  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-slate-800 bg-slate-900 text-white">
      {/* Logo */}
      <div className="border-b border-slate-800 px-6 py-5">
        <h1 className="text-2xl font-bold tracking-tight">TaxVault</h1>

        <p className="mt-1 text-sm text-slate-400">
          Tax Management Platform
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `flex w-full items-center gap-3 rounded-lg px-4 py-3 transition ${
                      isActive
                        ? "bg-slate-800 text-white"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`
                  }
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
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