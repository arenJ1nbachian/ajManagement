"use client";

import { Loading } from "@/components/loading";
import { useAuth } from "@/context/AuthContext";
import { Check, ChefHat } from "lucide-react";
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
      {!isLoading && !token && (
        <div className="min-h-screen lg:flex">
          <aside className="hidden lg:flex flex-col bg-panel text-panel-foreground p-12 flex-1">
            <header className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-brand rounded-md">
                <ChefHat size={20} className="text-brand-foreground" />
              </div>
              <span className="text-lg font-bold">ajManagement</span>
            </header>
            <div className="my-auto flex flex-col gap-5 max-w-md">
              <h2 className="text-4xl font-bold leading-tight">
                Your restaurant's schedule, in one place.
              </h2>
              <ul className="flex flex-col gap-3 text-panel-foreground/80">
                <li className="flex items-center gap-2">
                  <Check size={18} />
                  Build the week's shifts in minutes
                </li>
                <li className="flex items-center gap-2">
                  <Check size={18} />
                  Your team sees their hours on their phone
                </li>
                <li className="flex items-center gap-2">
                  <Check size={18} />
                  Invite staff with just an email
                </li>
              </ul>
            </div>
          </aside>
          <main className="flex flex-[1.4] items-center justify-center px-6">
            {children}
          </main>
        </div>
      )}
    </>
  );
};

export default AuthRootLayout;
