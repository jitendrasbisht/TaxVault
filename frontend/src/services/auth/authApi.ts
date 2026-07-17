import api from "@/lib/api";
import { API_ENDPOINTS } from "@/lib/apiEndpoints";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export interface CurrentUserResponse {
  id: number;
  email: string;
  full_name: string;
  is_active: boolean;
}

export const authApi = {
  login(payload: LoginRequest) {
    const formData = new URLSearchParams();

    formData.append("username", payload.email);
    formData.append("password", payload.password);

    return api.post<LoginResponse>(
      API_ENDPOINTS.auth.login,
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  },

  logout() {
    return api.post(API_ENDPOINTS.auth.logout);
  },

  me() {
    return api.get<CurrentUserResponse>(API_ENDPOINTS.auth.me);
  },

  refresh(refreshToken: string) {
    return api.post<LoginResponse>(
      API_ENDPOINTS.auth.refresh,
      null,
      {
        params: {
          refresh_token: refreshToken,
        },
      }
    );
  },
};

export default authApi;
