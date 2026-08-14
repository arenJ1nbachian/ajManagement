"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const dashboard = () => {
  const { logout } = useAuth();

  const handleClick = async () => {
    const response = await fetch("/api/auth/refreshToken/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) logout();
  };

  return <></>;
};

export default dashboard;
