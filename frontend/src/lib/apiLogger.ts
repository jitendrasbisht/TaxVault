export const apiLogger = {
  request(method: string, url: string) {
    if (import.meta.env.DEV) {
      console.info(`[API] ${method.toUpperCase()} ${url}`);
    }
  },

  response(method: string, url: string, status: number) {
    if (import.meta.env.DEV) {
      console.info(
        `[API] ${method.toUpperCase()} ${url} -> ${status}`
      );
    }
  },

  error(method: string, url: string, error: unknown) {
    if (import.meta.env.DEV) {
      console.error(
        `[API] ${method.toUpperCase()} ${url}`,
        error
      );
    }
  },
};
