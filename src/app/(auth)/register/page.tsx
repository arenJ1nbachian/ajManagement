"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { ChefHat, Eye, EyeOff } from "lucide-react";
import Input from "@/components/Input";
import Link from "next/link";
import FormError from "@/components/FormError";

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { login } = useAuth();
  const router = useRouter();

  const handleRegister = async () => {
    setError("");
    setIsLoading(true);
    const { confirmPassword, ...registerData } = form; // Seperate registerData
    try {
      if (form.confirmPassword !== form.password) {
        // Passwords dont't match
        setError("Passwords do not match");
        return;
      }

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });

      if (response.status === 400) {
        // Account already exists
        setError("An account with this email already exists");
        return;
      } else if (!response.ok) {
        setError("Something went wrong, please try again later.");
        return;
      }
      const data = await response.json();
      const { accessToken, id, role, locationId } = data; // Destructure to obtain token, id and role

      login(accessToken, id, role, locationId); // Login

      router.push("/dashboard"); // Redirect to dashboard page
    } catch (e) {
      setError("Something went wrong. Please try again");
    } finally {
      setIsLoading(false);
    }
  };

  const passwordsMismatch =
    form.confirmPassword !== "" && form.confirmPassword !== form.password;

  const passwordTooShort = passwordTouched && form.password.length < 8;

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-3">
      <div className="w-full max-w-sm flex flex-col flex-1 lg:flex-none lg:my-3 gap-6 justify-center">
        <header className="flex flex-col gap-2 items-center lg:items-start">
          <div className="w-10 h-10 flex items-center justify-center bg-brand rounded-md lg:hidden">
            <ChefHat size={20} className="text-brand-foreground" />
          </div>
          <h1 className="text-2xl font-bold">Set up your restaurant</h1>
          <div className="text-center lg:text-left">
            <p className="text-sm text-muted-foreground">
              Create the owner account.
            </p>
            <p className="text-sm text-muted-foreground">
              You'll add your location and team in the next steps
            </p>
          </div>
        </header>
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
          aria-busy={isLoading}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 min-w-0">
              <label className="text-sm font-medium" htmlFor="firstname">
                First name
              </label>
              <Input
                id="firstname"
                required
                placeholder="John"
                value={form.firstname}
                onChange={(e) =>
                  setForm({ ...form, firstname: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-2 min-w-0">
              <label className="text-sm font-medium" htmlFor="lastname">
                Last name
              </label>
              <Input
                id="lastname"
                required
                placeholder="Doe"
                value={form.lastname}
                onChange={(e) => setForm({ ...form, lastname: e.target.value })}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium" htmlFor="email">
              Work Email
            </label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@restaurant.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                autoComplete="new-password"
                required
                minLength={8}
                type={showPassword ? "text" : "password"}
                className="w-full pr-10"
                placeholder="•••••••••••••"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                onBlur={() => setPasswordTouched(true)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring text-muted-foreground hover:text-foreground cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <p
              className={`text-sm ${passwordTooShort ? "text-destructive" : "text-muted-foreground"}`}
            >
              At least 8 characters
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div className="relative">
              <Input
                required
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                className="w-full pr-10"
                placeholder="•••••••••••••"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring text-muted-foreground hover:text-foreground cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {passwordsMismatch && (
              <p className="text-sm text-destructive">Passwords don't match</p>
            )}
          </div>
          {error && <FormError message={error} />}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full cursor-pointer bg-primary text-primary-foreground px-4 enabled:hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed h-12 rounded-xl font-semibold"
          >
            {isLoading ? "Creating account..." : "Create account"}
          </button>
        </form>
      </div>
      <footer className="flex flex-col gap-1 mt-3 lg:mt-0">
        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>

        <p className="text-center text-sm text-muted-foreground">
          Joining a team? Use the link in your invite email.
        </p>
      </footer>
    </section>
  );
}
