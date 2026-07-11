import { useEffect, useState } from "react";

import type { ComplianceAnalytics } from "../types";
import { reportService } from "../services/reportService";

export function useComplianceAnalytics() {
  const [analytics, setAnalytics] =
    useState<ComplianceAnalytics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    reportService.getComplianceAnalytics().then((data) => {
      setAnalytics(data);
      setLoading(false);
    });
  }, []);

  return {
    analytics,
    loading,
  };
}