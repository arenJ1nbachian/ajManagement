"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { ChefHat } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState<string>(""); // Holds the value of the email input
  const [password, setPassword] = useState<string>(""); // Holds the value of the password input
  const [error, setError] = useState<string>(""); // Holds the error message if request's response returns an error
  const [rememberMe, setRememberMe] = useState<boolean>(false); // Hold the state of the remember me checkbox
  const { login, setActiveLocationId } = useAuth(); // Destructures login function from the externally created authContext
  const router = useRouter(); // Router for page redirection

  const handleLogin = async () => {
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
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm gap-6">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center bg-accent rounded-md">
            <ChefHat size={20} className="text-accent-foreground" />
          </div>
          <p className="text-lg font-medium">ajManagement</p>
          <p className="text-sm text-muted-foreground">
            Sign in to your account
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-muted-foreground" htmlFor="email">
              Email
            </label>
            <input
              className=""
              id="email"
              type="email"
              value={email}
              placeholder="you@restaurant.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-muted-foreground" htmlFor="password">
              Password
            </label>
            <input
              className=""
              id="password"
              type="password"
              value={password}
              placeholder="•••••••••••••"
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
              />
              <label htmlFor="rememberMe" className="text-muted-foreground">
                Remember me
              </label>
            </div>
            <a className="text-sm text-primary hover:underline" href="#">
              Forgot password?
            </a>
          </div>
          {error && <p className="text-destructive text-sm">{error}</p>}
          <button className="w-full cursor-pointer" onClick={handleLogin}>
            Sign in
          </button>
          <div className="text-center">
            Don't have an account?
            <button
              className="text-primary hover:underline"
              onClick={() => router.push("/register")}
            >
              Create one
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
