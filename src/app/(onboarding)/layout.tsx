"use client";

import { Loading } from "@/components/loading";
import Logo from "@/components/Logo";
import { useAuth } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const steps = [
  { title: "Your restaurant", sub: "Name and address", href: "/setup" },
  { title: "Roles", sub: "What people do on a shift", href: "/setup/roles" },
  { title: "Invite your team", sub: "Optional", href: "/setup/invite" },
];

const OnboardingRootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
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
    // Indicates that generating a new access token failed
    if (!isLoading && !token) {
      router.push("/login"); // User is brought to the login page
    }
  }, [isLoading, token]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && token && (
        <div className="min-h-screen lg:flex">
          <aside className="w-80 shrink-0 hidden lg:flex flex-col bg-card border-r border-border p-8 pr-7 gap-10">
            <header className="flex items-center gap-3 text-lg font-bold">
              <Logo size={20} />
              <span className="text-foreground">ajManagement</span>
            </header>
            <div className="flex flex-col gap-1.5">
              <h2 className="text-xl font-bold">Set up your restaurant</h2>
              <p className="text-muted-foreground text-sm leading-tight">
                About 3 minutes. You can change all of this later.
              </p>
            </div>
            <ol className="flex flex-col gap-1.5">
              {steps.map((step, index) => {
                const isCurrent = pathname === step.href;
                return (
                  <li
                    key={step.title}
                    className={`flex gap-3.5 px-3 py-2.5 rounded-xl ${isCurrent ? "bg-accent" : ""}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full border-2 ${isCurrent ? "border-primary text-primary" : "border-muted-foreground text-muted-foreground"} text-sm font-bold flex items-center justify-center shrink-0`}
                    >
                      {index + 1}
                    </div>
                    <div className="flex flex-col">
                      <span
                        className={`text-[15px] font-semibold ${isCurrent ? "text-accent-foreground" : "text-foreground"}`}
                      >
                        {step.title}
                      </span>
                      <span
                        className={`text-[13px] ${isCurrent ? "text-accent-foreground" : "text-muted-foreground"}`}
                      >
                        {step.sub}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </aside>
          <main className="flex-1 flex min-h-screen px-6 pt-5 pb-7 lg:py-16 lg:px-8">
            {children}
          </main>
        </div>
      )}
    </>
  );
};

export default OnboardingRootLayout;
