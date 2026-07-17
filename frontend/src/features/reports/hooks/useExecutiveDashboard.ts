import { useEffect, useState } from "react";

import type { DashboardMetric } from "../types";
import { reportService } from "../services/reportService";

export function useExecutiveDashboard() {
  const [metrics, setMetrics] = useState<DashboardMetric[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data = await reportService.getExecutiveMetrics();
        setMetrics(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load dashboard data.");
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  return {
    metrics,
    loading,
    error,
  };
}
