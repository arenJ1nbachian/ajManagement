"use client";

import { Loading } from "@/components/loading";
import Logo from "@/components/Logo";
import { useAuth } from "@/context/AuthContext";
import { $Enums } from "@generated/prisma";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthRootLayout = ({ children }: { children: React.ReactNode }) => {
  const { token, isLoading, role, locations } = useAuth(); // Access token and isLoading flag to determine if renewal of refreshToken api is ongoing
  const router = useRouter();
  const needsSetup = role === $Enums.Role.owner && locations.length === 0; // Tracks if the user is an owner and needs to setup a location

  /* Effect that runs on initial page load or when isLoading or token or needsSetup changes value.
     Since refreshing the page results in losing our access token, React needs more context 
     in order to decide if we had been previously authenticated or not. By renewing the access token
     by virtue of the refreshToken stored as an httpcookie, we get the necessary information to distinguish between
     previously authenticated vs not authenticated. A boolean flag isLoading is used to distinguish between an initial null value 
     of the access token state and an unchanged null value after the api returns an error (e.g. not authenticated)
     */
  useEffect(() => {
    // Indicates that generating a new access token succeeded (e.g. refresh token was provided)
    if (!isLoading && token) {
      // If the user is an owner, determine if they would need to setup a restaurant or if they need to be directed to the dashboard
      router.push(needsSetup ? "/setup" : "/dashboard");
    }
  }, [isLoading, token, needsSetup]);

  return (
    <>
      {(isLoading || token) && <Loading />}
      {!isLoading && !token && (
        <div className="min-h-screen lg:flex">
          <aside className="hidden lg:flex flex-col bg-panel text-panel-foreground p-12 flex-1">
            <header className="flex items-center gap-3">
              <Logo size={20} />
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
