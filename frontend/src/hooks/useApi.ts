import { useCallback, useState } from "react";

export function useApi<T>() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(async (request: () => Promise<T>) => {
    setLoading(true);
    setError(null);

    try {
      return await request();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    execute,
  };
}
