import { useEffect, useState } from "react";

import type { DocumentAnalytics } from "../types";
import { reportService } from "../services/reportService";

export function useDocumentAnalytics() {
  const [analytics, setAnalytics] =
    useState<DocumentAnalytics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    reportService.getDocumentAnalytics().then((data) => {
      setAnalytics(data);
      setLoading(false);
    });
  }, []);

  return {
    analytics,
    loading,
  };
}