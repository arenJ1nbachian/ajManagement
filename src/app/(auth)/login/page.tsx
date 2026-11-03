"use client";
import { useRef, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { ChefHat } from "lucide-react";
import Link from "next/link";
import Input from "@/components/Input";

export default function LoginPage() {
  const [email, setEmail] = useState<string>(""); // Holds the value of the email input
  const [password, setPassword] = useState<string>(""); // Holds the value of the password input
  const [error, setError] = useState<string>(""); // Holds the error message if request's response returns an error
  const [rememberMe, setRememberMe] = useState<boolean>(false); // Hold the state of the remember me checkbox
  const { login, setActiveLocationId } = useAuth(); // Destructures login function from the externally created authContext
  const router = useRouter(); // Router for page redirection
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const loginInProgress = useRef(false);

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
        setError("Invalid email or password");
        return;
      }

      const data = await response.json();
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
    <main className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm gap-6 flex flex-col">
        <header className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center bg-accent rounded-md">
            <ChefHat size={20} className="text-accent-foreground" />
          </div>
          <p className="text-lg font-medium">ajManagement</p>
          <h1 className="text-sm text-muted-foreground">
            Sign in to your account
          </h1>
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
            <label className="text-muted-foreground" htmlFor="password">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              placeholder="•••••••••••••"
              required
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="rememberMe"
                onChange={() =>
                  setRememberMe((prev) => {
                    return !prev;
                  })
                }
                checked={rememberMe}
                className="accent-primary"
              />
              <label htmlFor="rememberMe" className="text-muted-foreground">
                Remember me
              </label>
            </div>
            <a className="text-sm text-primary hover:underline" href="#">
              Forgot password?
            </a>
          </div>
          {error && (
            <p role="alert" className="text-destructive text-sm">
              {error}
            </p>
          )}
          <button
            disabled={isLoading}
            className="w-full cursor-pointer bg-primary text-primary-foreground px-4 py-2 rounded-md enabled:hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
          <div className="text-center">
            Don't have an account?{" "}
            <Link className="text-primary hover:underline" href="/register">
              Create one
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
