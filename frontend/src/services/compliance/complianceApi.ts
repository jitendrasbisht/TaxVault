import api from "@/lib/api";
import { API_ENDPOINTS } from "@/lib/apiEndpoints";

export const complianceApi = {
  getAll(params?: Record<string, unknown>) {
    return api.get(API_ENDPOINTS.compliance, {
      params,
    });
  },

  getById(id: string) {
    return api.get(
      `${API_ENDPOINTS.compliance}/${id}`
    );
  },

  create(data: unknown) {
    return api.post(
      API_ENDPOINTS.compliance,
      data
    );
  },

  update(
    id: string,
    data: unknown
  ) {
    return api.put(
      `${API_ENDPOINTS.compliance}/${id}`,
      data
    );
  },

  remove(id: string) {
    return api.delete(
      `${API_ENDPOINTS.compliance}/${id}`
    );
  },
};

export default complianceApi;
