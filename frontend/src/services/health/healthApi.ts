import api from "@/lib/api";

export const healthApi = {
  ping() {
    return api.get("/health");
  },
};

export default healthApi;
