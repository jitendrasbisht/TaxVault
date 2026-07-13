export function toQueryString(
  params: Record<string, unknown>
): string {
  const search = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (
      value !== undefined &&
      value !== null &&
      value !== ""
    ) {
      search.append(key, String(value));
    }
  });

  const query = search.toString();

  return query ? `?${query}` : "";
}
