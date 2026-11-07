"use client";

import Input from "@/components/Input";
import { ArrowRight } from "lucide-react";

const Setup = () => {
  return (
    <main className="flex flex-col min-h-screen px-6 pt-5 pb-7 gap-7">
      <header className="gap-3 flex flex-col">
        <p className="text-sm font-semibold text-muted-foreground">
          Step 1 of 3
        </p>
        <div
          className="grid grid-cols-3 gap-1.5"
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
        <h1 className="text-[26px] font-bold tracking-tight">
          Where's your restaurant?
        </h1>
        <p className="text-[15px] text-muted-foreground  leading-snug">
          This is your first location. You can add more later if you run
          several.
        </p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col gap-4 flex-1"
      >
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
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            className="text-sm font-medium text-foreground"
            htmlFor="phone"
          >
            Phone number
          </label>
          <Input type="tel" id="phone" placeholder="(555) 123-4567" />
        </div>
        <button
          className="h-13 rounded-[14px] bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 mt-auto"
          type="submit"
        >
          Continue <ArrowRight size={18} />
        </button>
      </form>
    </main>
  );
};

export default Setup;
