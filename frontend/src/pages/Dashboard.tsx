import {
  Briefcase,
  FileClock,
  IndianRupee,
  Users,
} from "lucide-react";
import KPICard from "../components/KPICard";

function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Page Heading */}
      <section>
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-600">
          Monitor your tax operations and business performance.
        </p>
      </section>

      {/* KPI Cards */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <KPICard
          title="Total Clients"
          value="1,254"
          change="+12%"
          icon={Users}
        />

        <KPICard
          title="Active Cases"
          value="324"
          change="+8%"
          icon={Briefcase}
        />

        <KPICard
          title="Pending Documents"
          value="47"
          change="-3%"
          icon={FileClock}
        />

        <KPICard
          title="Revenue"
          value="₹24.5L"
          change="+15%"
          icon={IndianRupee}
        />
      </section>
    </div>
  );
}

export default Dashboard;