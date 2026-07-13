export const API_ENDPOINTS = {
  auth: {
    login: "/auth/login",
    logout: "/auth/logout",
    me: "/auth/me",
    refresh: "/auth/refresh",
  },

  dashboard: "/dashboard",

  clients: "/clients",

  compliance: "/compliance",

  cases: "/cases",

  documents: "/documents",

  reports: "/reports",
} as const;
