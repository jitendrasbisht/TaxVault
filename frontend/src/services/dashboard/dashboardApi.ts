import api from "@/lib/api";
import { API_ENDPOINTS } from "@/lib/apiEndpoints";

export interface DashboardSummary {
  clients: number;
  cases: number;
  compliance: number;
  documents: number;
}

export const dashboardApi = {
  getSummary() {
    return api.get<DashboardSummary>(
      `${API_ENDPOINTS.dashboard}/summary`
    );
  },

  getRecentActivity() {
    return api.get(
      `${API_ENDPOINTS.dashboard}/activity`
    );
  },

  getUpcomingDeadlines() {
    return api.get(
      `${API_ENDPOINTS.dashboard}/deadlines`
    );
  },
};

export default dashboardApi;
