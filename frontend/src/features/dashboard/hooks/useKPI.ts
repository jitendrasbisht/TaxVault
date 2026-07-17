import { useEffect, useState } from "react";

import dashboardApi, {
  DashboardSummary,
} from "@/services/dashboard/dashboardApi";

export function useKPI() {
  const [data, setData] =
    useState<DashboardSummary | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dashboardApi
      .getSummary()
      .then((res) => setData(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return {
    data,
    loading,
  };
}
