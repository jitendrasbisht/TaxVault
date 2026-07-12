import { StatCard } from "@/components/ui";

export default function KPISection() {
  return (
    <div className="grid gap-6 lg:grid-cols-4">

      <StatCard
        title="Active Clients"
        value="1,254"
        footer="? 12% this month"
      />

      <StatCard
        title="Open Cases"
        value="218"
        footer="18 require attention"
      />

      <StatCard
        title="Pending Documents"
        value="76"
        footer="Awaiting upload"
      />

      <StatCard
        title="Compliance Score"
        value="98%"
        footer="Excellent"
      />

    </div>
  );
}
