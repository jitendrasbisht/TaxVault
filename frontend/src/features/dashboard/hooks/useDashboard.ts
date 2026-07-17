import { useEffect, useState } from "react";

import dashboardApi, { DashboardSummary } from "@/services/dashboard/dashboardApi";

export function useDashboard() {
  const [data, setData] = useState<DashboardSummary | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dashboardApi
      .getSummary()
      .then((response) => setData(response.data))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
