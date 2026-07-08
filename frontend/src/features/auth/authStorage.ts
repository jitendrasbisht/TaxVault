import type { User } from "./types";

const STORAGE_KEY = "taxvault.auth.user";

export function getStoredUser(): User | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);

    if (!value) return null;

    return JSON.parse(value);
  } catch {
    return null;
  }
}

export function setStoredUser(user: User) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function clearStoredUser() {
  localStorage.removeItem(STORAGE_KEY);
}