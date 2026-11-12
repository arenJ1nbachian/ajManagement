"use client";
import { useRef, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Check, ChefHat, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Input from "@/components/Input";
import FormError from "@/components/FormError";
import Logo from "@/components/Logo";
import { AuthenticationResponse } from "@/types/auth";

export default function LoginPage() {
  const [email, setEmail] = useState<string>(""); // Holds the value of the email input
  const [password, setPassword] = useState<string>(""); // Holds the value of the password input
  const [error, setError] = useState<string>(""); // Holds the error message if request's response returns an error
  const [rememberMe, setRememberMe] = useState<boolean>(false); // Hold the state of the remember me checkbox
  const { login, setActiveLocationId } = useAuth(); // Destructures login function from the externally created authContext
  const router = useRouter(); // Router for page redirection
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const loginInProgress = useRef(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = async () => {
    if (loginInProgress.current) return;
    loginInProgress.current = true;
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, rememberMe }),
      });

      if (!response.ok) {
        // Invalid credentials
        setError(
          "That email and password don't match. Check for typos and try again.",
        );
        return;
      }

      const data: AuthenticationResponse = await response.json();
      const { accessToken, id, role, locations } = data;

      login(accessToken, id, role, locations);

      if (locations.length > 0) {
        setActiveLocationId(data.locations[0].location.id);
      }

      router.push("/dashboard"); // Redirect to dashboard page
    } catch (e) {
      setError("Something went wrong. Please try again.");
    } finally {
      loginInProgress.current = false;
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full max-w-sm min-h-screen mx-auto flex flex-col justify-center py-2 lg:py-0">
      <div className="flex-1 flex flex-col justify-center lg:flex-none gap-6 lg:my-3">
        <header className="flex flex-col items-center lg:items-start gap-4">
          <div className="w-10 h-10 flex items-center justify-center bg-brand rounded-md lg:hidden">
            <Logo size={20} />
          </div>
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="text-sm text-muted-foreground">
            Sign in to see your shifts and team
          </p>
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          aria-busy={isLoading}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <label className="text-muted-foreground" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              placeholder="you@restaurant.com"
              required
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <label className="text-muted-foreground" htmlFor="password">
                Password
              </label>

              <Link
                className="text-sm text-primary hover:underline"
                href="/forgot-password"
              >
                Forgot password?
              </Link>
            </div>

            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="•••••••••••••"
                required
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff
                    className="text-muted-foreground hover:text-foreground cursor-pointer "
                    size={18}
                  />
                ) : (
                  <Eye
                    className="text-muted-foreground hover:text-foreground cursor-pointer"
                    size={18}
                  />
                )}
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                id="rememberMe"
                onChange={() =>
                  setRememberMe((prev) => {
                    return !prev;
                  })
                }
                checked={rememberMe}
                className="accent-primary cursor-pointer"
              />
              <label
                htmlFor="rememberMe"
                className="text-muted-foreground cursor-pointer"
              >
                Keep me signed in on this device
              </label>
            </div>
          </div>
          {error && <FormError message={error} />}
          <button
            disabled={isLoading}
            className="w-full cursor-pointer bg-primary text-primary-foreground px-4 enabled:hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed h-12 rounded-xl font-semibold"
            type="submit"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
      <footer className="text-center lg:text-start text-sm text-muted-foreground flex flex-col gap-1">
        <p>Work here? Your manager will send you an invite.</p>
        <p>
          Opening a new restaurant?{" "}
          <Link className="text-primary hover:underline" href="/register">
            Create an account
          </Link>
        </p>
      </footer>
    </section>
  );
}
