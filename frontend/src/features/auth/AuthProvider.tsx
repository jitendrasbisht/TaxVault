import { useCallback, useEffect, useMemo, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  clearStoredUser,
  getStoredUser,
  setStoredUser,
} from "./authStorage";
import type {
  AuthContextValue,
  AuthState,
  LoginCredentials,
  User,
} from "./types";

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    const user = getStoredUser();

    setState({
      user,
      isAuthenticated: !!user,
      isLoading: false,
    });
  }, []);

  const login = useCallback(async (credentials: LoginCredentials) => {
    // TODO:
    // Replace with FastAPI authentication endpoint.

    await new Promise((resolve) => setTimeout(resolve, 700));

    const user: User = {
      id: crypto.randomUUID(),
      name: "Demo User",
      email: credentials.email,
      role: "Administrator",
    };

    setStoredUser(user);

    setState({
      user,
      isAuthenticated: true,
      isLoading: false,
    });
  }, []);

  const logout = useCallback(() => {
    clearStoredUser();

    setState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      ...state,
      login,
      logout,
    }),
    [state, login, logout]
  );

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}