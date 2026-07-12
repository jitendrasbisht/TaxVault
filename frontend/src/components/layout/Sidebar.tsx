import {
  Briefcase,
  FileText,
  FolderOpen,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

import { AppVersion } from "@/components/ui";

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
    <aside className="flex min-h-screen w-[272px] flex-col border-r border-slate-800 bg-slate-900 text-white">

      <div className="border-b border-slate-800 px-7 py-7">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600">
            <ShieldCheck size={24} />
          </div>

          <div>

            <h1 className="text-2xl font-bold tracking-tight">
              TaxVault
            </h1>

            <p className="text-xs text-slate-400">
              Enterprise Suite
            </p>

          </div>

        </div>

      </div>

      <nav className="flex-1 px-4 py-6">

        <ul className="space-y-2">

          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>

                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `group flex items-center gap-4 rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white hover:translate-x-1"
                    }`
                  }
                >
                  <Icon
                    size={19}
                    className="transition-transform group-hover:scale-110"
                  />

                  {item.name}

                </NavLink>

              </li>
            );
          })}

        </ul>

      </nav>

      <div className="border-t border-slate-800 p-6">

        <AppVersion />

      </div>

    </aside>
  );
}

export default Sidebar;