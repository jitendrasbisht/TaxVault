import {
  Bell,
  Building2,
  Database,
  Globe,
  Info,
  KeyRound,
  LifeBuoy,
  Palette,
  Shield,
  Users,
  FileText,
  Activity,
  HardDrive,
  Link2,
  Clock3,
  } from "lucide-react";

export type SettingsSection =
  | "organization"
  | "users"
  | "roles"
  | "notifications"
  | "security"
  | "branding"
  | "preferences"
  | "audit"
  | "backup"
  | "integrations"
  | "emailTemplates"
  | "apiKeys"
  | "licensing"
  | "dataRetention"
  | "systemHealth"
  | "sessions"
  | "database"
  | "about";

type Props = {
  selected: SettingsSection;
  onChange: (section: SettingsSection) => void;
};

const menu = [
  {
    title: "Organization",
    id: "organization",
    icon: Building2,
  },
  {
    title: "Users & Teams",
    id: "users",
    icon: Users,
  },
  {
    title: "Roles & Permissions",
    id: "roles",
    icon: Shield,
  },
  {
    title: "Notifications",
    id: "notifications",
    icon: Bell,
  },
  {
    title: "Security",
    id: "security",
    icon: Shield,
  },
  {
    title: "Branding",
    id: "branding",
    icon: Palette,
  },
  {
    title: "Preferences",
    id: "preferences",
    icon: Globe,
  },
  {
    title: "Audit Logs",
    id: "audit",
    icon: Activity,
  },
  {
    title: "Backup & Recovery",
    id: "backup",
    icon: HardDrive,
  },
  {
    title: "Integrations",
    id: "integrations",
    icon: Link2,
  },
  {
    title: "Email Templates",
    id: "emailTemplates",
    icon: FileText,
  },
  {
    title: "API Keys",
    id: "apiKeys",
    icon: KeyRound,
  },
  {
    title: "Licensing",
    id: "licensing",
    icon: LifeBuoy,
  },
  {
    title: "Data Retention",
    id: "dataRetention",
    icon: Clock3,
  },
  {
    title: "System Health",
    id: "systemHealth",
    icon: Activity,
  },
  {
    title: "Session Management",
    id: "sessions",
    icon: Users,
  },
  {
    title: "Database",
    id: "database",
    icon: Database,
  },
  {
    title: "About",
    id: "about",
    icon: Info,
  },
] as const;

export default function SettingsSidebar({
  selected,
  onChange,
}: Props) {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <h2 className="mb-6 text-lg font-semibold">
        Administration
      </h2>

      <div className="space-y-2 max-h-[760px] overflow-y-auto pr-2">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() =>
                onChange(item.id as SettingsSection)
              }
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                selected === item.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Icon size={18} />
              <span>{item.title}</span>
            </button>
          );
        })}

      </div>

    </aside>
  );
}