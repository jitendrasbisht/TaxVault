import api from "@/lib/api";
import { API_ENDPOINTS } from "@/lib/apiEndpoints";

export const reportApi = {
  getAll(params?: Record<string, unknown>) {
    return api.get(API_ENDPOINTS.reports, {
      params,
    });
  },

  getById(id: string) {
    return api.get(
      `${API_ENDPOINTS.reports}/${id}`
    );
  },

  generate(data: unknown) {
    return api.post(
      API_ENDPOINTS.reports,
      data
    );
  },

  download(id: string) {
    return api.get(
      `${API_ENDPOINTS.reports}/${id}/download`,
      {
        responseType: "blob",
      }
    );
  },
};

export default reportApi;
