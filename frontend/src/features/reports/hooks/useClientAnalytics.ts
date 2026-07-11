import { useEffect, useState } from "react";

import type { ClientAnalytics } from "../types";
import { reportService } from "../services/reportService";

export function useClientAnalytics() {
  const [analytics, setAnalytics] = useState<ClientAnalytics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    reportService.getClientAnalytics().then((data) => {
      setAnalytics(data);
      setLoading(false);
    });
  }, []);

  return {
    analytics,
    loading,
  };
}