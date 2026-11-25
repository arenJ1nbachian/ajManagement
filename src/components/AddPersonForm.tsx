"use client";

import { useAuth } from "@/context/AuthContext";
import Input from "./Input";
import { useState } from "react";

type Role = {
  id: string;
  name: string;
  color: string;
};

type Invitee = {
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  role: "employee" | "manager";
  positionIds: string[];
};

export const AddPersonForm = ({
  roles,
  existingEmails,
  onAdd,
}: {
  roles: Role[];
  existingEmails: string[];
  onAdd: (invitee: Invitee) => void;
}) => {
  const [error, setError] = useState("");
  const { role } = useAuth();

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    const data = new FormData(e.currentTarget);

    const invitee: Invitee = {
      firstname: String(data.get("firstname")),
      lastname: String(data.get("lastname")),
      email: String(data.get("email")),
      phone: String(data.get("phone")),
      role: data.get("access") === "manager" ? "manager" : "employee",
      positionIds: data.getAll("positionIds").map(String),
    };

    if (existingEmails.includes(invitee.email.toLowerCase().trim())) {
      setError("Already in your list");
      return;
    }

    onAdd(invitee);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
        className="flex flex-col gap-4"
      >
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <label
              className="text-muted-foreground font-medium text-sm"
              htmlFor="firstname"
            >
              First name
            </label>
            <Input
              name="firstname"
              className="rounded-xl h-12"
              id="firstname"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              className="text-muted-foreground font-medium text-sm"
              htmlFor="lastname"
            >
              Last name
            </label>
            <Input
              name="lastname"
              className="rounded-xl h-12"
              id="lastname"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            className="text-muted-foreground font-medium text-sm"
            htmlFor="email"
          >
            Email
          </label>
          <Input
            name="email"
            type="email"
            className="rounded-xl h-12"
            id="email"
            required
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            className="text-muted-foreground font-medium text-sm"
            htmlFor="phone"
          >
            {"Phone "}
            <span className="font-normal">{"(optional)"}</span>
          </label>
          <Input
            name="phone"
            placeholder="They can add it when they join"
            type="tel"
            className="rounded-xl h-12"
            id="phone"
          />
        </div>
        <fieldset>
          <legend className="text-muted-foreground font-medium text-sm mb-2">
            Access
          </legend>
          <div
            className={`grid ${role === "owner" ? "grid-cols-2" : "grid-cols-1"} gap-2`}
          >
            <label className="px-3 py-2.5 border border-border rounded-xl has-checked:border-primary has-checked:bg-accent has-checked:border-2 cursor-pointer">
              <input
                type="radio"
                name="access"
                value="employee"
                defaultChecked
                className="sr-only"
              />
              <span className="flex flex-col">
                <span className="font-semibold">Employee</span>
                <span className="text-muted-foreground text-xs">
                  Sees own schedule
                </span>
              </span>
            </label>
            {role === "owner" && (
              <label className="px-3 py-2.5 border border-border rounded-xl has-checked:border-primary has-checked:bg-accent has-checked:border-2 cursor-pointer">
                <input
                  type="radio"
                  name="access"
                  value="manager"
                  className="sr-only"
                />
                <span className="flex flex-col">
                  <span className="font-semibold">Manager</span>
                  <span className="text-muted-foreground text-xs">
                    Edits shifts and staff
                  </span>
                </span>
              </label>
            )}
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-muted-foreground font-medium text-sm mb-2">
            {"Roles "}
            <span className="font-normal">{"(optional, pick any)"}</span>
          </legend>

          <div className="flex flex-wrap gap-2">
            {roles.map((role) => (
              <label
                className="border border-border rounded-full h-11 px-4 flex items-center has-checked:border-primary has-checked:bg-accent has-checked:border-2 font-medium has-checked:font-semibold cursor-pointer"
                key={role.id}
              >
                <input
                  name="positionIds"
                  className="sr-only"
                  type="checkbox"
                  value={role.id}
                />
                {role.name}
              </label>
            ))}
          </div>
        </fieldset>
        <button
          type="submit"
          className="mt-1 w-full h-[52px] rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 cursor-pointer enabled:hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add to list
        </button>
      </form>
    </>
  );
};
