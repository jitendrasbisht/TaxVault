import { api } from ".";

export async function pingApi() {
  const response = await api.get("/health");
  return response.data;
}
