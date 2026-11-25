"use client";

import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { AddPersonForm } from "./AddPersonForm";

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

export const AddPersonSheet = ({
  onClose,
  onAdd,
  roles,
  existingEmails,
}: {
  onClose: () => void;
  onAdd: (invitee: Invitee) => void;
  roles: Role[];
  existingEmails: string[];
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="inset-0 fixed z-50">
      <div className="inset-0 absolute bg-black/50" onClick={onClose}></div>
      <section
        className="absolute inset-x-0 bottom-0 rounded-t-3xl pt-2.5 pb-7 px-5 gap-4 flex flex-col bg-card max-h-[90dvh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <span
          aria-hidden="true"
          className="bg-border w-10 h-1.5 rounded-full self-center flex-none"
        ></span>
        <div className="flex">
          <div className="flex flex-1 flex-col gap-1">
            <h2 className="font-bold text-xl">Add a person</h2>
            <p className="text-sm text-muted-foreground">
              Invites go out when you press Send on the last screen.
            </p>
          </div>
          <button
            aria-label="Close Sheet"
            onClick={onClose}
            className="cursor-pointer text-muted-foreground size-11 flex-none flex items-center justify-center rounded-lg hover:bg-muted dark:hover:bg-border"
            type="button"
          >
            <XIcon />
          </button>
        </div>
        <AddPersonForm
          roles={roles}
          existingEmails={existingEmails}
          onAdd={(invitee: Invitee) => {
            onAdd(invitee);
            onClose();
          }}
        />
      </section>
    </div>
  );
};
