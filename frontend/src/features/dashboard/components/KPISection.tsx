import {
  CardGrid,
  MetricBadge,
  StatCard,
} from "@/components/ui";

export default function KPISection() {
  return (
    <CardGrid>

      <StatCard
        title="Active Clients"
        value="1,254"
        footer=""
        icon={<MetricBadge value="+12%" />}
      />

      <StatCard
        title="Open Cases"
        value="218"
        footer=""
        icon={<MetricBadge value="18 Due" positive={false} />}
      />

      <StatCard
        title="Pending Documents"
        value="76"
        footer=""
        icon={<MetricBadge value="Review" />}
      />

      <StatCard
        title="Compliance Score"
        value="98%"
        footer=""
        icon={<MetricBadge value="Healthy" />}
      />

    </CardGrid>
  );
}
