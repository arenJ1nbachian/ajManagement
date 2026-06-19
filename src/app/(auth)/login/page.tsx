"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  const [email, setEmail] = useState<string>(""); // Holds the value of the email input
  const [password, setPassword] = useState<string>(""); // Holds the value of the password input
  const [error, setError] = useState<string>(""); // Holds the error message if request's response returns an error
  const { login } = useAuth(); // Destructures login function from the externally created authContext
  const router = useRouter(); // Router for page redirection

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        // Invalid credentials
        setError("Invalid email or password");
        return;
      }

      const data = await response.json();
      const { accessToken, id, role } = data;

      login(accessToken, id, role);

      router.push("/dashboard"); // Redirect to dashboard page
    } catch (e) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <Card className="w-100 max-w-sm flex ">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button onClick={() => router.push("/register")} variant="link">
              Sign Up
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && (
                  <div className="ml-auto text-red-500 text-sm w-fit">
                    {error}
                  </div>
                )}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full" onClick={handleLogin}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
