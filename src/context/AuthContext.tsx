"use client";
import { createContext, useState, useContext, useEffect } from "react";

interface locations {
  location: location;
  status: string;
}

interface location {
  address: string;
  id: string;
  name: string;
  phone: string;
}

type AuthContextType = {
  token: string | null;
  userId: string | null;
  role: string | null;
  isLoading: boolean;
  activeLocationId: string | null;
  setActiveLocationId: (id: string) => void;
  locations: locations[];
  login: (
    token: string,
    userId: string,
    role: string,
    location: locations[],
  ) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [locations, setLocations] = useState<locations[]>([]);
  const [activeLocationId, setActiveLocationId] = useState<string | null>(null);

  /*  Upon initial load generate a new access token and refresh token
      This will set the states to a specific value which the root layouts
      of our pages will evaluate to redirect a user to the appropriate page 
      
      !isLoading && token  - Indicates that a valid refreshToken was attached and the user is authenticated with a fresh access token
      isLoading && !token  - Indicates that the renewRefreshToken api is still processing and hasn't returned anything (too early to dertermine)
      !isLoading && !token - Indicates that an access token couldn't be generated and the user is not authenticated (login required)
      
      */
  useEffect(() => {
    const renewRefreshToken = async () => {
      const response = await fetch("/api/auth/refreshToken/renew", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 404 || response.status === 401) {
        setIsLoading(false);
      } else {
        const data: {
          accessToken: string;
          id: string;
          role: string;
          locations: locations[];
        } = await response.json();
        login(data.accessToken, data.id, data.role, data.locations);
        if (data.locations.length > 0) {
          setActiveLocationId(data.locations[0].location.id);
        }
        setIsLoading(false);
      }
    };

    renewRefreshToken();
  }, []);

  const login = (
    token: string,
    userId: string,
    role: string,
    locations: locations[],
  ) => {
    setToken(token);
    setUserId(userId);
    setRole(role);
    setLocations(locations);
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
    setRole(null);
    setLocations([]);
    setActiveLocationId(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        role,
        isLoading,
        activeLocationId,
        setActiveLocationId,
        locations,
        login,
        logout,
      }}
    >
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
