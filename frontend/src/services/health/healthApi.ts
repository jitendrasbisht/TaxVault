import { api } from "@/services/api";

export const healthApi = {
  ping() {
    return api.get("/health");
  },
};

export default healthApi;
