"use client";
import { useState } from "react";
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
    <>
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-100 max-w-sm flex ">
          <div>
            <div>Register an account</div>
            <div>Enter the fields below to register an account</div>
            <div>
              <button onClick={() => router.push("/login")}>Login</button>
            </div>
          </div>
          <div>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <label htmlFor="email">Firstname</label>
                  <input
                    id="firstname"
                    type="text"
                    placeholder="John"
                    required
                    onChange={(e) =>
                      setForm((prev) => {
                        return { ...prev, firstname: e.target.value };
                      })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email">Lastname</label>
                  <input
                    id="lastname"
                    type="text"
                    placeholder="Doe"
                    required
                    onChange={(e) =>
                      setForm((prev) => {
                        return { ...prev, lastname: e.target.value };
                      })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="JohnDoe@example.com"
                    required
                    onChange={(e) =>
                      setForm((prev) => {
                        return { ...prev, email: e.target.value };
                      })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <label htmlFor="password">Password</label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <input
                    id="password"
                    type="password"
                    required
                    onChange={(e) =>
                      setForm((prev) => {
                        return { ...prev, password: e.target.value };
                      })
                    }
                  />
                  <label htmlFor="password">Confirm Password</label>
                  <input
                    id="password"
                    type="password"
                    required
                    onChange={(e) =>
                      setForm((prev) => {
                        return { ...prev, confirmPassword: e.target.value };
                      })
                    }
                  />
                  {error && (
                    <div className="ml-auto text-red-500 text-sm w-fit">
                      {error}
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
          <div className="flex-col gap-2">
            <button type="submit" className="w-full" onClick={handleRegister}>
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
