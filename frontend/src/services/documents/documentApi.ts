import { api } from "@/services/api";
import { API_ENDPOINTS } from "@/lib/apiEndpoints";

export const documentApi = {
  getAll(params?: Record<string, unknown>) {
    return api.get(API_ENDPOINTS.documents, { params });
  },

  getById(id: string) {
    return api.get(`${API_ENDPOINTS.documents}/${id}`);
  },

  upload(data: FormData) {
    return api.post(API_ENDPOINTS.documents, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  update(id: string, data: unknown) {
    return api.put(`${API_ENDPOINTS.documents}/${id}`, data);
  },

  remove(id: string) {
    return api.delete(`${API_ENDPOINTS.documents}/${id}`);
  },
};

export default documentApi;
