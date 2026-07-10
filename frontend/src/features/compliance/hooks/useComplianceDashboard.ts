import { useCallback, useEffect, useState } from "react";

import { complianceService } from "../services/complianceService";
import {
  ComplianceCalendarEvent,
  ComplianceDashboardStats,
  ComplianceTask,
} from "../types";

interface UseComplianceDashboardResult {
  stats: ComplianceDashboardStats | null;
  upcomingTasks: ComplianceTask[];
  overdueTasks: ComplianceTask[];
  calendarEvents: ComplianceCalendarEvent[];

  loading: boolean;
  error: string | null;

  refresh: () => Promise<void>;
}

export function useComplianceDashboard(): UseComplianceDashboardResult {
  const [stats, setStats] =
    useState<ComplianceDashboardStats | null>(null);

  const [upcomingTasks, setUpcomingTasks] = useState<
    ComplianceTask[]
  >([]);

  const [overdueTasks, setOverdueTasks] = useState<
    ComplianceTask[]
  >([]);

  const [calendarEvents, setCalendarEvents] = useState<
    ComplianceCalendarEvent[]
  >([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  const loadDashboard = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const [
        dashboardStats,
        upcoming,
        overdue,
        calendar,
      ] = await Promise.all([
        complianceService.getDashboardStats(),
        complianceService.getUpcomingTasks(),
        complianceService.getOverdueTasks(),
        complianceService.getCalendarEvents(),
      ]);

      setStats(dashboardStats);
      setUpcomingTasks(upcoming);
      setOverdueTasks(overdue);
      setCalendarEvents(calendar);
    } catch (err) {
      console.error(err);
      setError("Failed to load compliance dashboard.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadDashboard();
  }, [loadDashboard]);

  return {
    stats,
    upcomingTasks,
    overdueTasks,
    calendarEvents,

    loading,
    error,

    refresh: loadDashboard,
  };
}