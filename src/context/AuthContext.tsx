"use client";
import { createContext, useState, useContext } from "react";

type AuthContextType = {
  token: string | null;
  userId: string | null;
  role: string | null;
  login: (token: string, userId: string, role: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  const login = (token: string, userId: string, role: string) => {
    setToken(token);
    setUserId(userId);
    setRole(role);
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ token, userId, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/* Since this function can be called from any component we throw an error to limit the function call to only components that are children of AuthContext.
   Nothing pr beevents this function froming called by any component but it reduces human developer mistakes */

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used with an AuthProvider");
  return context;
}
