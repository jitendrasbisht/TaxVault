import {
  CardGrid,
  MetricBadge,
  StatCard,
} from "@/components/ui";

import { useKPI } from "../hooks/useKPI";

export default function KPISection() {
  const { data } = useKPI();

  return (
    <CardGrid>
      <StatCard
        title="Active Clients"
        value={data?.clients ?? "..."}
        footer=""
        icon={<MetricBadge value="Live" />}
      />

      <StatCard
        title="Open Cases"
        value={data?.cases ?? "..."}
        footer=""
        icon={<MetricBadge value="Live" />}
      />

      <StatCard
        title="Pending Documents"
        value={data?.documents ?? "..."}
        footer=""
        icon={<MetricBadge value="Live" />}
      />

      <StatCard
        title="Compliance Records"
        value={data?.compliance ?? "..."}
        footer=""
        icon={<MetricBadge value="Live" />}
      />
    </CardGrid>
  );
}
