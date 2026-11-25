"use client";

import { AddPersonSheet } from "@/components/AddPersonSheet";
import { useAuth } from "@/context/AuthContext";
import { Check, CircleAlert, Plus, XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Invitee = {
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  role: "employee" | "manager";
  positionIds: string[];
  error?: string;
  sent?: boolean;
};

type Role = {
  id: string;
  name: string;
  color: string;
};

const Setup = () => {
  const { activeLocationId, token, completeSetup } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [invitees, setInvitees] = useState<Invitee[]>([]);
  const [isSending, setIsSending] = useState<boolean>(false);
  const sendingRef = useRef<boolean>(false);
  const [roles, setRoles] = useState<Role[]>([]);
  const savingRef = useRef(false);
  const hasFailures = invitees.some((invitee) => !!invitee.error);
  const unsent = invitees.filter((invitee) => !invitee.sent);
  const allFailed = unsent.every((invitee) => !!invitee.error);
  const sentCount = invitees.length - unsent.length;
  const failedCount = invitees.filter((invitee) => !!invitee.error).length;
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

  useEffect(() => {
    if (!token || !activeLocationId) return;

    const getRoles = async () => {
      try {
        const res = await fetch(
          `/api/positions?locationId=${activeLocationId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!res.ok) return;

        const data = await res.json();

        setRoles(data);
      } catch (e) {
        console.error(e);
      }
    };

    getRoles();
  }, [token, activeLocationId]);

  const getInviteeDetails = (invitee: Invitee): string => {
    const access = invitee.role === "manager" ? "Manager" : "Employee";
    const roleName = invitee.positionIds
      .map((pid) => roles.find((r) => r.id === pid)?.name)
      .filter(Boolean)
      .join(", ");

    return roleName ? `${access} · ${roleName}` : access;
  };

  const handleSend = async () => {
    if (sendingRef.current) return;
    sendingRef.current = true;
    setIsSending(true);
    const result: Invitee[] = [];
    for (const invitee of unsent) {
      try {
        const res = await fetch(`/api/employees`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...invitee, lid: activeLocationId }),
        });

        const data = await res.json();

        if (!res.ok) {
          result.push({
            ...invitee,
            error: data.message ?? "Couldn't send the invite",
          });
        } else {
          result.push({
            ...invitee,
            sent: true,
            error: undefined,
          });
        }
      } catch (e) {
        console.error(e);
        result.push({
          ...invitee,
          error:
            "Couldn't reach the server. Check your connection and try again.",
        });
      }
    }

    setIsSending(false);
    sendingRef.current = false;

    if (!result.some((invitee) => !!invitee.error)) {
      handleContinue();
    } else {
      const sent = invitees.filter((invitee) => !!invitee.sent);
      setInvitees([...result, ...sent]);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-7 flex-1 w-full max-w-155 mx-auto">
        <header className="gap-3 flex flex-col">
          <p className="text-sm font-semibold text-muted-foreground">
            Step 3 of 3
          </p>
          <div
            className="grid grid-cols-3 gap-1.5 lg:hidden"
            role="progressbar"
            aria-label="Setup progress"
            aria-valuenow={3}
            aria-valuemax={3}
          >
            <span className="h-1.5 rounded-full bg-primary"></span>
            <span className="h-1.5 rounded-full bg-primary"></span>
            <span className="h-1.5 rounded-full bg-primary"></span>
          </div>
        </header>
        <div className="flex flex-col gap-1.5">
          <h1 className="text-[26px] lg:text-[32px] font-bold tracking-tight">
            Invite your team
          </h1>
          <p className="text-[15px] text-muted-foreground leading-snug ">
            Each person gets an email to set a password. They'll show as Pending
            until they do.
          </p>
        </div>
        {hasFailures && (
          <div
            className="text-destructive bg-destructive/10 border border-destructive/30 py-3 px-3.5 text-sm rounded-xl flex gap-2"
            role="alert"
          >
            <CircleAlert className="flex-none" size={18} />
            {`${sentCount > 0 ? `${sentCount} ${sentCount === 1 ? "invite" : "invites"} sent.` : ""} ${failedCount} ${failedCount === 1 ? "invite" : "invites"} didn't go through. Fix or remove ${failedCount === 1 ? "it" : "them"}, then finish.`}
          </div>
        )}
        {invitees.length > 0 ? (
          <ul className="bg-card border border-border rounded-2xl overflow-hidden">
            {invitees.map((invitee) => (
              <li
                key={invitee.email}
                className={`flex items-center gap-3 min-h-16 py-2.5 pl-3.5 pr-2 border-b border-muted dark:border-border last:border-b-0 ${invitee.error ? "bg-destructive/10" : ""}`}
              >
                <span
                  className={`size-[38px] flex-none rounded-full flex items-center justify-center text-[13px] font-semibold  uppercase  ${invitee.error ? "text-destructive bg-destructive/20" : "text-muted-foreground dark:bg-border bg-muted"}`}
                >
                  {invitee.firstname[0]}
                  {invitee.lastname[0]}
                </span>
                <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                  <p className="text-[15px] font-semibold">
                    {invitee.firstname} {invitee.lastname}
                  </p>
                  <p className="text-[13px] text-muted-foreground truncate">
                    {invitee.email}
                  </p>
                  <p className="text-xs font-medium">
                    {getInviteeDetails(invitee)}
                  </p>
                  {invitee.error && (
                    <p className="text-xs text-destructive">{invitee.error}</p>
                  )}
                </div>
                {invitee.sent ? (
                  <span className="flex gap-2 items-center text-primary">
                    <Check size={18} />
                    Sent
                  </span>
                ) : (
                  <button
                    onClick={() =>
                      setInvitees((prev) =>
                        prev.filter((inv) => inv.email !== invitee.email),
                      )
                    }
                    className="size-11 flex-none flex items-center justify-center rounded-lg text-muted-foreground hover:bg-muted cursor-pointer dark:hover:bg-border"
                    type="button"
                    aria-label={`Remove ${invitee.firstname} ${invitee.lastname}`}
                  >
                    <XIcon size={18} />
                  </button>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">
            No one added yet. Add the people you work with, or skip and invite
            them later.
          </p>
        )}
        <button
          onClick={() => setIsSheetOpen(true)}
          type="button"
          className="h-13 rounded-[14px] border border-dashed border-primary text-primary text-[15px] font-semibold flex items-center justify-center gap-1.5 hover:bg-accent cursor-pointer"
        >
          <Plus size={16} />
          {"Add a person"}
        </button>
        <div className="mt-auto flex flex-col gap-1.5">
          {invitees.length > 0 && (
            <button
              disabled={isSending}
              onClick={handleSend}
              className="w-full h-[52px] rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 cursor-pointer enabled:hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending
                ? "Sending..."
                : unsent.length === 0
                  ? "Finish"
                  : allFailed
                    ? "Try again"
                    : `Send ${unsent.length} invite${unsent.length > 1 ? "s" : ""} and finish`}
            </button>
          )}
          {!(invitees.length > 0 && unsent.length === 0) && (
            <button
              disabled={isSaving || isSending}
              onClick={handleContinue}
              className="h-11 text-[15px] font-semibold text-primary cursor-pointer disabled:opacity-50"
            >
              {hasFailures || sentCount > 0
                ? `Finish without ${unsent.length === 1 ? unsent[0].firstname : `${unsent.length} people`}`
                : "Skip, I'll invite people later"}
            </button>
          )}
          {error && (
            <p className="text-sm text-destructive text-center">{error}</p>
          )}
        </div>
      </div>
      {isSheetOpen && (
        <AddPersonSheet
          onClose={() => setIsSheetOpen(false)}
          onAdd={(invitee: Invitee) => {
            setInvitees((prev) => [...prev, invitee]);
          }}
          roles={roles}
          existingEmails={invitees.map((invitee) =>
            invitee.email.toLowerCase().trim(),
          )}
        />
      )}
    </>
  );
};

export default Setup;
