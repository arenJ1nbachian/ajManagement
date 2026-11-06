"use client";

import Input from "@/components/Input";
import { ChevronLeft, Mail } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

export default function ForgotPage() {
  const [email, setEmail] = useState<string>("");
  const [sentTo, setSentTo] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);
  const resetInProgress = useRef(false);

  const handleReset = async (address?: string) => {
    if (resetInProgress.current) return;
    resetInProgress.current = true;
    setIsLoading(true);

    try {
      setSent(true);
      setSentTo(address ?? email);
    } catch {
    } finally {
      resetInProgress.current = false;
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full max-w-sm min-h-screen mx-auto flex flex-col gap-6 justify-center pb-2 lg:py-0 pt-4">
      <Link
        className="flex items-center gap-1 self-start text-sm font-semibold text-foreground hover:text-primary h-11 "
        href={"/login"}
      >
        <ChevronLeft size={18} /> Back to sign in
      </Link>
      <div className="flex-1 flex flex-col justify-center lg:flex-none gap-6">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Reset your password</h1>
          <p className="text-muted-foreground text-sm">
            Enter the email you sign in with. We'll send you a link to choose a
            new password.
          </p>
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleReset();
          }}
          aria-busy={isLoading}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <label className="text-muted-foreground" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              placeholder="you@restaurant.com"
              required
              autoComplete="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <button
            disabled={isLoading}
            className="w-full cursor-pointer bg-primary text-primary-foreground px-4 enabled:hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed h-12 rounded-xl font-semibold"
            type="submit"
          >
            {isLoading ? "Sending reset link..." : "Send reset link"}
          </button>
          {sent && (
            <div
              role="status"
              className="flex items-start gap-3 p-4 rounded-xl border bg-accent border-primary/30 text-accent-foreground"
            >
              <Mail size={20} className="text-primary shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <p className="font-semibold">Check your email</p>
                <p className="text-sm pr-8">
                  If {sentTo} has an account, a reset link is on its way. It
                  works for 1 hour.
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
      {sent && (
        <p className="text-sm text-muted-foreground text-center">
          {"Didn't get it? Check spam, or "}
          <button
            type="button"
            onClick={() => handleReset(sentTo)}
            className="text-primary font-semibold hover:underline cursor-pointer"
          >
            send again
          </button>
        </p>
      )}
    </section>
  );
}
