import { useEffect, useState } from "react";

import type { DashboardMetric } from "../types";
import { reportService } from "../services/reportService";

export function useExecutiveDashboard() {
  const [metrics, setMetrics] = useState<DashboardMetric[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    reportService.getExecutiveMetrics().then((data) => {
      setMetrics(data);
      setLoading(false);
    });
  }, []);

  return {
    metrics,
    loading,
  };
}