import { useMemo } from "react";
import type { Case } from "../types/case";

export function useCaseMetrics(cases: Case[]) {
  return useMemo(() => ({
    total: cases.length,
    open: cases.filter(c => c.status === "OPEN").length,
    inProgress: cases.filter(c => c.status === "IN_PROGRESS").length,
    completed: cases.filter(c => c.status === "COMPLETED").length,
    closed: cases.filter(c => c.status === "CLOSED").length,
    urgent: cases.filter(c => c.priority === "URGENT").length,
    overdue: cases.filter(c =>
      c.due_date &&
      new Date(c.due_date) < new Date() &&
      c.status !== "COMPLETED" &&
      c.status !== "CLOSED"
    ).length
  }), [cases]);
}
