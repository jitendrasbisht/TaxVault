import { api } from "@/services/api";
import { API_ENDPOINTS } from "@/lib/apiEndpoints";

export const clientApi = {
  getAll(params?: Record<string, unknown>) {
    return api.get(API_ENDPOINTS.clients, { params });
  },

  getById(id: string) {
    return api.get(`${API_ENDPOINTS.clients}/${id}`);
  },

  create(data: unknown) {
    return api.post(API_ENDPOINTS.clients, data);
  },

  update(id: string, data: unknown) {
    return api.put(`${API_ENDPOINTS.clients}/${id}`, data);
  },

  remove(id: string) {
    return api.delete(`${API_ENDPOINTS.clients}/${id}`);
  },
};

export default clientApi;
