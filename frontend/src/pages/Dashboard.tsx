import {
  Briefcase,
  FileClock,
  IndianRupee,
  Users,
} from "lucide-react";

import KPICard from "../components/ui/KPICard";
import { PageHeader } from "../components/ui";

function Dashboard() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Monitor your tax operations and business performance."
      />

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