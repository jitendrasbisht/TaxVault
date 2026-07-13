import { api } from "@/services/api";
import { API_ENDPOINTS } from "@/lib/apiEndpoints";

export const dashboardApi = {
  getSummary() {
    return api.get(API_ENDPOINTS.dashboard);
  },

  getRecentActivity() {
    return api.get(`${API_ENDPOINTS.dashboard}/activity`);
  },

  getUpcomingDeadlines() {
    return api.get(`${API_ENDPOINTS.dashboard}/deadlines`);
  },
};

export default dashboardApi;
