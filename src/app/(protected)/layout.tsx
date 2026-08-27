"use client";

import { Loading } from "@/components/loading";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  AlertTriangle,
  BookOpen,
  Calendar,
  LayoutDashboard,
  LucideIcon,
  Package,
  Users2,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

const ProtectedRootLayout = ({ children }: { children: React.ReactNode }) => {
  const { token, isLoading } = useAuth();
  const router = useRouter();

  /* Effect that runs on inital page load or when isLoading or token changes value.
     Since refreshing the page results in losing our access token, React needs more context 
     in order to decide if we had been previously authenticated or not. By renewing the access token
     by virtue of the refreshToken stored as an httpcookie, we get the neccesarry information to distinguish between
     previously authenticated vs not authenticated. A boolean flag isLoading is used to distinguish between an inital null value 
     of the access token state and an unchanged null value after the api returns an error (e.g. not authenticated)
     */
  useEffect(() => {
    // Indicates that generating a new access token failed (e.g. no refresh token provided)
    if (!isLoading && !token) {
      router.push("/login"); // User is required to log in
    }
  }, [isLoading, token]);

  const pathname = usePathname();

  const navItems: NavItem[] = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Schedule", href: "/schedule", icon: Calendar },
    { label: "Staff", href: "/staff", icon: Users2 },
    { label: "Inventory", href: "/inventory", icon: Package },
    { label: "Issues", href: "/issues", icon: AlertTriangle },
    { label: "Resources", href: "/resources", icon: BookOpen },
  ];

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && token && (
        <>
          <div className="flex h-screen">
            <aside className="hidden lg:flex lg:flex-col w-56 h-screen bg-zinc-900 border-r border-zinc-800 gap-1">
              {navItems.map((i) => {
                return (
                  <Link
                    key={i.href}
                    href={i.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
                      pathname === i.href
                        ? "bg-blue-600 text-white"
                        : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                    }`}
                    onClick={() => {
                      sessionStorage.removeItem("weekRange");
                      sessionStorage.removeItem("selectedDay");
                    }}
                  >
                    <i.icon size={20} />
                    <span>{i.label}</span>
                  </Link>
                );
              })}
            </aside>
            <main className="flex-1">{children}</main>
          </div>
          <nav className="flex lg:hidden fixed bottom-0 w-full bg-zinc-900 border-t border-zinc-800">
            {navItems.map((i) => {
              return (
                <Link
                  key={i.href}
                  href={i.href}
                  className={`flex flex-1 flex-col items-center justify-center py-3 text-xs gap-1 ${pathname === i.href ? "text-blue-500" : "text-zinc-500"}`}
                >
                  <i.icon size={20} />
                </Link>
              );
            })}
          </nav>
        </>
      )}
    </>
  );
};

export default ProtectedRootLayout;
