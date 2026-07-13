import type { AxiosResponse } from "axios";

export function unwrapResponse<T>(response: AxiosResponse<T>): T {
  return response.data;
}

export async function safeRequest<T>(
  request: () => Promise<AxiosResponse<T>>
): Promise<T> {
  const response = await request();
  return response.data;
}
