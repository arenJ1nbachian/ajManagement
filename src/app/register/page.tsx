"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string>("");
  const { login } = useAuth();
  const router = useRouter();

  const handleRegister = async () => {
    const { confirmPassword, ...registerData } = form;
    try {
      if (form.confirmPassword !== form.password) {
        setError("Passwords do not match");
        return;
      }

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });

      if (!response.ok) {
        setError("Account already exists");
        return;
      }

      const data = await response.json();
      const { token, id, role } = data;

      login(token, id, role);

      router.push("/dashboard");
    } catch (e) {
      setError("Something went wrong. Please try again");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-4">
        <Label htmlFor="firstname">Firstname</Label>
        <Input
          id="firstname"
          type="text"
          value={form.firstname}
          onChange={(e) =>
            setForm((prev) => {
              return { ...prev, firstname: e.target.value };
            })
          }
        />
        <Label htmlFor="lastname">Lastname</Label>
        <Input
          id="lastname"
          type="text"
          value={form.lastname}
          onChange={(e) =>
            setForm((prev) => {
              return { ...prev, lastname: e.target.value };
            })
          }
        />
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) =>
            setForm((prev) => {
              return { ...prev, email: e.target.value };
            })
          }
        />
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={form.password}
          onChange={(e) =>
            setForm((prev) => {
              return { ...prev, password: e.target.value };
            })
          }
        />
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={(e) =>
            setForm((prev) => {
              return { ...prev, confirmPassword: e.target.value };
            })
          }
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button onClick={handleRegister}>Register</Button>
      </div>
    </div>
  );
}
