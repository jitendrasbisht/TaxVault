const cache = new Map<string, unknown>();

export const apiCache = {
  get<T>(key: string): T | undefined {
    return cache.get(key) as T | undefined;
  },

  set(key: string, value: unknown) {
    cache.set(key, value);
  },

  has(key: string) {
    return cache.has(key);
  },

  remove(key: string) {
    cache.delete(key);
  },

  clear() {
    cache.clear();
  },
};

export default apiCache;
