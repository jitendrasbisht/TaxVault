import { api } from "@/services/api";
import { API_ENDPOINTS } from "@/lib/apiEndpoints";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
}

export const authApi = {
  login(payload: LoginRequest) {
    return api.post<LoginResponse>(API_ENDPOINTS.auth.login, payload);
  },

  logout() {
    return api.post(API_ENDPOINTS.auth.logout);
  },

  me() {
    return api.get(API_ENDPOINTS.auth.me);
  },

  refresh() {
    return api.post(API_ENDPOINTS.auth.refresh);
  },
};

export default authApi;
