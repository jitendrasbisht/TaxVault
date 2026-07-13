import {
  AUTH_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/services/api/constants";

export const tokenStorage = {
  getAccessToken() {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  },

  setAccessToken(token: string) {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  },

  removeAccessToken() {
    localStorage.removeItem(AUTH_TOKEN_KEY);
  },

  getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  },

  setRefreshToken(token: string) {
    localStorage.setItem(REFRESH_TOKEN_KEY, token);
  },

  removeRefreshToken() {
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  },

  clear() {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  },
};

export default tokenStorage;
