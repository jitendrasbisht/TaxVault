import { useCallback, useEffect, useMemo, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  clearStoredUser,
  setStoredUser,
} from "./authStorage";
import type {
  AuthContextValue,
  AuthState,
  LoginCredentials,
  User,
} from "./types";

import authApi from "@/services/auth/authApi";
import tokenStorage from "@/services/auth/tokenStorage";

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
    async function initialize() {
      const token = tokenStorage.getAccessToken();

      if (!token) {
        setState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
        return;
      }

      try {
        const { data } = await authApi.me();

        const user: User = {
          id: String(data.id),
          name: data.full_name,
          email: data.email,
          role: "Administrator",
        };

        setStoredUser(user);

        setState({
          user,
          isAuthenticated: true,
          isLoading: false,
        });
      } catch {
        tokenStorage.clear();
        clearStoredUser();

        setState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    }

    initialize();
  }, []);

  const login = useCallback(async (credentials: LoginCredentials) => {
    const { data: tokens } = await authApi.login(credentials);

    tokenStorage.setAccessToken(tokens.access_token);
    tokenStorage.setRefreshToken(tokens.refresh_token);

    const { data } = await authApi.me();

    const user: User = {
      id: String(data.id),
      name: data.full_name,
      email: data.email,
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
    tokenStorage.clear();
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
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
