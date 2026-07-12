import { PageHeader } from "@/components/ui";

import {
  KPISection,
  RecentActivityCard,
  UpcomingDeadlinesCard,
} from "@/features/dashboard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="Dashboard"
        description="Welcome back to TaxVault Enterprise."
      />

      <KPISection />

      <div className="grid gap-6 xl:grid-cols-2">

        <RecentActivityCard />

        <UpcomingDeadlinesCard />

      </div>

    </div>
  );
}