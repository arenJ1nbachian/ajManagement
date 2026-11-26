"use client";
import { AuthenticationResponse, UserLocation } from "@/types/auth";
import { $Enums, Location } from "@generated/prisma";
import { createContext, useState, useContext, useEffect } from "react";

type AuthContextType = {
  token: string | null;
  userId: string | null;
  isLoading: boolean;
  activeLocationId: string | null;
  setActiveLocationId: (id: string) => void;
  role: $Enums.Role | null;
  locations: UserLocation[];
  login: (token: string, userId: string, location: UserLocation[]) => void;
  logout: () => void;
  addLocation: (location: Location) => void;
  addPositions: (locationId: string, count: number) => void;
  completeSetup: (locationId: string, completedAt: string) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [locations, setLocations] = useState<UserLocation[]>([]);
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
        const data: AuthenticationResponse = await response.json();
        login(data.accessToken, data.id, data.locations);
        if (data.locations.length > 0) {
          setActiveLocationId(data.locations[0].location.id);
        }
        setIsLoading(false);
      }
    };

    renewRefreshToken();
  }, []);

  const login = (token: string, userId: string, locations: UserLocation[]) => {
    setToken(token);
    setUserId(userId);
    setLocations(
      locations.map((uL) => ({
        ...uL,
        location: {
          ...uL.location,
          setupCompletedAt: uL.location.setupCompletedAt
            ? new Date(uL.location.setupCompletedAt)
            : null,
        },
      })),
    );
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
    setLocations([]);
    setActiveLocationId(null);
  };

  const addLocation = (location: Location) => {
    setLocations((prev) => [
      ...prev,
      {
        location: {
          ...location,
          _count: { position: 0 },
          setupCompletedAt: location.setupCompletedAt
            ? new Date(location.setupCompletedAt)
            : null,
        },
        status: $Enums.Status.active,
        role: $Enums.Role.owner,
      },
    ]);

    if (!activeLocationId) {
      setActiveLocationId(location.id);
    }
  };

  const addPositions = (locationId: string, count: number) => {
    setLocations((prev) =>
      prev.map((uL) =>
        uL.location.id === locationId
          ? {
              ...uL,
              location: {
                ...uL.location,
                _count: {
                  ...uL.location._count,
                  position: uL.location._count.position + count,
                },
              },
            }
          : uL,
      ),
    );
  };

  const completeSetup = (locationId: string, completedAt: string) => {
    setLocations((prev) =>
      prev.map((uL) =>
        uL.location.id === locationId
          ? {
              ...uL,
              location: {
                ...uL.location,
                setupCompletedAt: new Date(completedAt),
              },
            }
          : uL,
      ),
    );
  };

  const role =
    locations.find((l) => {
      return l.location.id === activeLocationId;
    })?.role ?? null;

  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        isLoading,
        activeLocationId,
        setActiveLocationId,
        role,
        locations,
        login,
        logout,
        addLocation,
        addPositions,
        completeSetup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/* Since this function can be called from any component we throw an error to limit the function call to only components that are children of AuthContext.
   Nothing prevents this function from being called by any component but it reduces human developer mistakes */

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used with an AuthProvider");
  return context;
}
