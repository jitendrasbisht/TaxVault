import { useEffect, useState } from "react";

import { caseService } from "../services/case.service";
import { Case } from "../types/case";

export function useCases() {
  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(true);

  async function refresh() {
    const data = await caseService.getCases();
    setCases(data);
  }

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const data = await caseService.getCases();

        if (active) {
          setCases(data);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      active = false;
    };
  }, []);

  return {
    cases,
    loading,
    refresh,
  };
}
