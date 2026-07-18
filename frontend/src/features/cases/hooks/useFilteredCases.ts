import { useMemo } from "react";
import type { Case } from "../types/case";

export function useFilteredCases(
  cases: Case[],
  search: string,
  status: string
) {
  return useMemo(() => {
    return cases.filter(c => {
      const matchesSearch =
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        String(c.id).includes(search);

      const matchesStatus =
        status === "ALL" || c.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [cases, search, status]);
}
