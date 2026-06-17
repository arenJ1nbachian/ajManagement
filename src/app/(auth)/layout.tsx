"use client";

import { Loading } from "@/components/loading";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthRootLayout = ({ children }: { children: React.ReactNode }) => {
  const { token, isLoading } = useAuth(); // Access token and isLoading flag to determine if renewal of refreshToken api is ongoing
  const router = useRouter();

  /* Effect that runs on inital page load or when isLoading or token changes value.
     Since refreshing the page results in losing our access token, React needs more context 
     in order to decide if we had been previously authenticated or not. By renewing the access token
     by virtue of the refreshToken stored as an httpcookie, we get the neccesarry information to distinguish between
     previously authenticated vs not authenticated. A boolean flag isLoading is used to distinguish between an inital null value 
     of the access token state and an unchanged null value after the api returns an error (e.g. not authenticated)
     */
  useEffect(() => {
    // Indicates that generating a new access token suceeded (e.g. refresh token was provided)
    if (!isLoading && token) {
      router.push("/dashboard"); // User is brought to the dashboard
    }
  }, [isLoading, token]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && !token && children}
    </>
  );
};

export default AuthRootLayout;
