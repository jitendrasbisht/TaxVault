import { useState } from "react";

export function useMutation<TData = unknown, TResult = unknown>(
  mutationFn: (data: TData) => Promise<TResult>
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = async (data: TData) => {
    setLoading(true);
    setError(null);

    try {
      return await mutationFn(data);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unexpected error";
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    mutate,
    loading,
    error,
  };
}
