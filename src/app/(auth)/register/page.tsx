"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { ChefHat, Eye, EyeOff } from "lucide-react";
import Input from "@/components/Input";
import Link from "next/link";

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

  const { login } = useAuth();
  const router = useRouter();

  const handleRegister = async () => {
    const { confirmPassword, ...registerData } = form; // Seperate registerData
    try {
      if (
        !form.firstname ||
        !form.firstname ||
        !form.lastname ||
        !form.password ||
        !form.confirmPassword
      ) {
        setError("Please fill out all required fields");
        return;
      }
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

      if (!response.ok) {
        // Account already exists
        setError("Account already exists");
        return;
      }

      const data = await response.json();
      const { accessToken, id, role, locationId } = data; // Destructure to obtain token, id and role

      login(accessToken, id, role, locationId); // Login

      router.push("/dashboard"); // Redirect to dashboard page
    } catch (e) {
      setError("Something went wrong. Please try again");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-3">
      <div className="w-full max-w-sm flex flex-col flex-1 lg:flex-none lg:my-3 gap-6 justify-center">
        <header className="flex flex-col gap-2 items-center lg:items-baseline">
          <div className="w-10 h-10 flex items-center justify-center bg-brand rounded-md lg:hidden">
            <ChefHat size={20} className="text-brand-foreground" />
          </div>
          <h1 className="text-2xl font-bold">Set up your restaurant</h1>
          <p className="text-sm text-muted-foreground">
            Create the owner account. You'll add your location and team in the
            next steps
          </p>
        </header>
        <form className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 min-w-0">
              <label className="text-sm font-medium" htmlFor="firstname">
                First name
              </label>
              <Input id="firstname" placeholder="John" />
            </div>
            <div className="flex flex-col gap-2 min-w-0">
              <label className="text-sm font-medium" htmlFor="lastname">
                Last name
              </label>
              <Input id="lastname" placeholder="Doe" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium" htmlFor="email">
              Work Email
            </label>
            <Input id="email" placeholder="you@restaurant.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full pr-10"
                placeholder="•••••••••••••"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                onClick={() => setShowPassword((prev) => !prev)}
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
            <p className="text-sm text-muted-foreground">
              At least 8 characters
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-2 rounded-md cursor-pointer hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Create account
          </button>
        </form>
      </div>
      <footer className="flex flex-col gap-1">
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
