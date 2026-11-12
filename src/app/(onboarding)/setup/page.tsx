"use client";
import FormError from "@/components/FormError";
import Input from "@/components/Input";
import { useAuth } from "@/context/AuthContext";
import { Location } from "@generated/prisma";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { useRef, useState } from "react";

interface SetupForm {
  name: string;
  address: string;
  phone: string;
}

const Setup = () => {
  const [error, setError] = useState<string>(""); // Holds the error message to be rendered on the screen
  const [isLoading, setIsLoading] = useState<boolean>(false); // Tracks whether an API request is in progress
  const setupInProgress = useRef(false); // Tracks whether setup is in progress to prevent duplicate executions (extra guard)
  const router = useRouter();
  const [form, setForm] = useState<SetupForm>({
    name: "",
    address: "",
    phone: "",
  }); // Holds the field values of the form
  const { token, addLocation } = useAuth();

  const handleContinue = async () => {
    if (setupInProgress.current === true) return; // Abort when an api is currently in progress
    setIsLoading(true); // Set isLoading to true to disable the "Continue" button which prevents the user to spam multiple api calls
    setupInProgress.current = true;
    setError("");
    try {
      const res = await fetch("/api/locations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      const location = data as Location;

      addLocation(location);
      router.push("/setup/roles");
    } catch {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
      setupInProgress.current = false;
    }
  };

  return (
    <div className="flex flex-col gap-7 flex-1 w-full max-w-155 mx-auto">
      <header className="gap-3 flex flex-col">
        <p className="text-sm font-semibold text-muted-foreground">
          Step 1 of 3
        </p>
        <div
          className="grid grid-cols-3 gap-1.5 lg:hidden"
          role="progressbar"
          aria-label="Setup progress"
          aria-valuenow={1}
          aria-valuemax={3}
        >
          <span className="h-1.5 rounded-full bg-primary"></span>
          <span className="h-1.5 rounded-full bg-border"></span>
          <span className="h-1.5 rounded-full bg-border"></span>
        </div>
      </header>
      <div className="flex flex-col gap-1.5">
        <h1 className="text-[26px] lg:text-[32px] font-bold tracking-tight">
          Where's your restaurant?
        </h1>
        <p className="text-[15px] text-muted-foreground leading-snug">
          This is your first location. You can add more later if you run
          several.
        </p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleContinue();
        }}
        className="flex flex-col gap-4 flex-1 lg:flex-none"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label
              className="text-sm font-medium text-foreground"
              htmlFor="location"
            >
              Location name
            </label>
            <Input
              placeholder="e.g. Downtown"
              id="location"
              aria-describedby="name-hint"
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <p className="text-[13px] text-muted-foreground" id="name-hint">
              What your team calls this place
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              className="text-sm font-medium text-foreground"
              htmlFor="address"
            >
              Address
            </label>
            <Input
              autoComplete="street-address"
              placeholder="Street, city"
              id="address"
              value={form.address}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, address: e.target.value }))
              }
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              className="text-sm font-medium text-foreground"
              htmlFor="phone"
            >
              Phone number
            </label>
            <Input
              type="tel"
              id="phone"
              placeholder="(555) 123-4567"
              value={form.phone}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          </div>
        </div>
        {error && <FormError message={error} />}
        <button
          className="h-13 rounded-[14px] bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 mt-auto lg:mt-2 lg:self-end lg:px-5 lg:h-12 enabled:hover:opacity-90 transition-opacity duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={isLoading}
        >
          Continue <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
};

export default Setup;
