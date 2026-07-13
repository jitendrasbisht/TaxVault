import { useCallback, useEffect, useState } from "react";

export function useQuery<T>(queryFn: () => Promise<T>, immediate = true) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await queryFn();
      setData(result);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error");
      throw err;
    } finally {
      setLoading(false);
    }
  }, [queryFn]);

  useEffect(() => {
    if (immediate) {
      void refetch();
    }
  }, [immediate, refetch]);

  return {
    data,
    loading,
    error,
    refetch,
  };
}
