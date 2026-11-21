"use client";

import FormError from "@/components/FormError";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const Setup = () => {
  const { activeLocationId, token, completeSetup } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const savingRef = useRef(false);
  const handleContinue = async () => {
    if (savingRef.current === true) return;
    if (!activeLocationId) return;

    savingRef.current = true;
    setIsSaving(true);
    setError("");

    try {
      const res = await fetch("/api/locations/complete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          locationId: activeLocationId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }
      completeSetup(data.id, data.setupCompletedAt);

      router.push("/dashboard");
    } catch {
      setError("Something went wrong");
    } finally {
      savingRef.current = false;
      setIsSaving(false);
    }
  };

  return (
    <>
      <button disabled={isSaving} onClick={handleContinue}>
        Skip, I'll invite people later
      </button>
      {error && <FormError message={error} />}
    </>
  );
};

export default Setup;
