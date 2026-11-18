"use client";

import FormError from "@/components/FormError";
import Input from "@/components/Input";
import { useAuth } from "@/context/AuthContext";
import { PALETTE, ROLE_COLOR_CLASSES } from "@/lib/roleColorPalette";
import { ArrowRight, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const SAMPLE_ROLES = [
  "Line Cook",
  "Server",
  "Host",
  "Bartender",
  "Dishwasher",
  "Delivery",
  "Manager",
  "Barista",
];

const Roles = () => {
  const setupInProgress = useRef<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [selected, setSelected] = useState<string[]>([]);
  const [customRoles, setCustomRoles] = useState<string[]>([]);
  const [draft, setDraft] = useState<string>("");
  const { locations, activeLocationId, token, addPositions } = useAuth();
  const router = useRouter();
  const activeLocation = locations.find(
    (l) => l.location.id === activeLocationId,
  );
  const allRoles = [...SAMPLE_ROLES, ...customRoles];

  const handleContinue = async () => {
    if (!activeLocationId) return;
    if (setupInProgress.current === true) return; // Abort when an api is currently in progress
    setIsLoading(true); // Set isLoading to true to disable the "Continue" button which prevents the user to spam multiple api calls
    setupInProgress.current = true;
    setError("");
    try {
      const res = await fetch("/api/positions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          locationId: activeLocationId,
          names: selected,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      addPositions(activeLocationId, data.length);

      router.push("/setup/invite");
    } catch {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
      setupInProgress.current = false;
    }
  };

  return (
    <>
      <div className="flex flex-col gap-7 flex-1 w-full max-w-155 mx-auto">
        <header className="gap-3 flex flex-col">
          <p className="text-sm font-semibold text-muted-foreground">
            Step 2 of 3
          </p>
          <div
            className="grid grid-cols-3 gap-1.5 lg:hidden"
            role="progressbar"
            aria-label="Setup progress"
            aria-valuenow={2}
            aria-valuemax={3}
          >
            <span className="h-1.5 rounded-full bg-primary"></span>
            <span className="h-1.5 rounded-full bg-primary"></span>
            <span className="h-1.5 rounded-full bg-border"></span>
          </div>
        </header>
        <div className="flex flex-col gap-1.5">
          <h1 className="text-[26px] lg:text-[32px] font-bold tracking-tight">
            What roles do you schedule?
          </h1>
          <p className="text-[15px] text-muted-foreground leading-snug">
            {"Tap the ones you use at " +
              (activeLocation?.location.name ?? "your restaurant") +
              ". Each gets its own colour so you can read the schedule at a glance."}
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {allRoles.map((role) => {
            return (
              <button
                type="button"
                className={`cursor-pointer rounded-full border-2 h-11 px-4 font-medium text-[15px] flex items-center gap-1.5 ${selected.includes(role) ? ROLE_COLOR_CLASSES[PALETTE[selected.indexOf(role) % PALETTE.length]] : "bg-card border-border"}`}
                key={role}
                aria-pressed={selected.includes(role)}
                onClick={() =>
                  setSelected((prev) => {
                    return prev.includes(role)
                      ? prev.filter((p) => p !== role)
                      : [...prev, role];
                  })
                }
              >
                {selected.includes(role) && <Check size={16} />}
                {role}
              </button>
            );
          })}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const newRole = draft.trim();
            const key = newRole.toLowerCase();
            if (!key) return;

            const existing = allRoles.find((r) => r.toLowerCase() === key);

            if (existing) {
              if (!selected.includes(existing)) {
                setSelected((prev) => {
                  return [...prev, existing];
                });
              }
            } else {
              setCustomRoles((prev) => {
                return [...prev, newRole];
              });
              setSelected((prev) => {
                return [...prev, newRole];
              });
            }
            setDraft("");
          }}
          className="flex flex-col gap-1.5"
        >
          <label
            className="text-sm font-medium text-muted-foreground"
            htmlFor="draft"
          >
            Add your own
          </label>
          <div className="flex gap-2 lg:max-w-110">
            <Input
              placeholder="e.g. Pastry Chef"
              className="flex-1 min-w-0 h-[50px] text-base"
              id="draft"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
            />
            <button
              type="submit"
              className="border border-border rounded-md px-4 h-[50px] bg-card text-[15px] font-semibold cursor-pointer enabled:hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!draft.trim()}
            >
              Add
            </button>
          </div>
        </form>
        {selected.length > 0 && (
          <div className="hidden lg:flex flex-col gap-3 bg-card border border-border rounded-2xl px-[18px] py-4">
            <div className="text-[13px] font-semibold uppercase tracking-wider text-muted-foreground">
              How your roles will look
            </div>
            <div className="flex flex-wrap gap-2">
              {selected.map((role, i) => (
                <span
                  key={role}
                  className={`text-[13px] font-semibold px-3 py-1 rounded-full border ${ROLE_COLOR_CLASSES[PALETTE[i % PALETTE.length]]}`}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="flex-1 lg:hidden" />
        {error && <FormError message={error} />}
        <button
          type="button"
          disabled={selected.length === 0 || isLoading}
          onClick={() => handleContinue()}
          className="w-full h-[52px] rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 cursor-pointer enabled:hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed lg:self-end lg:w-auto lg:px-5 lg:h-13"
        >
          {isLoading ? (
            <>Saving...</>
          ) : selected.length > 0 ? (
            <>
              Continue with {selected.length} role
              {selected.length > 1 ? "s" : ""}
              <ArrowRight size={18} />
            </>
          ) : (
            <>Select at least one role</>
          )}
        </button>
      </div>
    </>
  );
};

export default Roles;
