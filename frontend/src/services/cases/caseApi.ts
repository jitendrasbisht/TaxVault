import { api } from "@/services/api";
import { API_ENDPOINTS } from "@/lib/apiEndpoints";

export const caseApi = {
  getAll(params?: Record<string, unknown>) {
    return api.get(API_ENDPOINTS.cases, { params });
  },

  getById(id: string) {
    return api.get(`${API_ENDPOINTS.cases}/${id}`);
  },

  create(data: unknown) {
    return api.post(API_ENDPOINTS.cases, data);
  },

  update(id: string, data: unknown) {
    return api.put(`${API_ENDPOINTS.cases}/${id}`, data);
  },

  remove(id: string) {
    return api.delete(`${API_ENDPOINTS.cases}/${id}`);
  },
};

export default caseApi;
