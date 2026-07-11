import { useEffect, useState } from "react";

import type { RevenuePoint } from "../types";
import { reportService } from "../services/reportService";

export function useRevenueDashboard() {
  const [revenue, setRevenue] = useState<RevenuePoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    reportService.getRevenue().then((data) => {
      setRevenue(data);
      setLoading(false);
    });
  }, []);

  return {
    revenue,
    loading,
  };
}