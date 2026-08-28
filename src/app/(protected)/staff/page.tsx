"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";

interface UserObject {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  role: string;
}

interface Employees {
  status: string;
  user: UserObject;
}

export default function StaffPage() {
  const { locations, activeLocationId, setActiveLocationId, token } = useAuth();

  const currentLocation = locations?.find(
    (l) => l.location.id === activeLocationId,
  );

  const [employees, setEmployees] = useState<Employees[]>([]);
  const [activeFilter, setActiveFilter] = useState<
    "all" | "active" | "pending" | "inactive"
  >("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getEmployees = async () => {
      const response = await fetch(
        `/api/employees?locationId=${activeLocationId}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );

      if (response.ok) {
        const data = await response.json();
        setEmployees(data);
      }
    };

    if (token && activeLocationId) {
      getEmployees();
    }
  }, [activeLocationId, token]);

  return (
    <div className="lg:hidden flex flex-col w-full h-full">
      <div className="px-4 pt-4">
        <div className="flex flex-col">
          <div className="text-xl font-bold">Staff</div>
          <div className="text-xs text-zinc-400">{`${employees.length} people · ${currentLocation?.location.name} - ${currentLocation?.location.address}`}</div>
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex flex-col px-4 py-2 gap-2">
        <select
          className="text-sm border border-zinc-800 rounded-4xl px-2 bg-zinc-900 h-9 w-fit"
          value={activeLocationId ?? locations[0].location.id}
          onChange={(e) => {
            setActiveLocationId(e.target.value);
          }}
        >
          {locations?.map((l) => (
            <option
              key={l.location.id}
              value={l.location.id}
            >{`${l.location.name} · ${l.location.address}`}</option>
          ))}
        </select>
        <div className="flex py-2 flex-wrap justify-between gap-2">
          <div className="flex gap-2">
            <button
              className={` ${activeFilter === "all" ? "bg-blue-600 text-sm " : "text-zinc-400 border border-zinc-700 text-xs"} px-2 py-1 rounded-full`}
              onClick={(e) => setActiveFilter("all")}
            >
              All · {employees.length}
            </button>
            <button
              className={` ${activeFilter === "active" ? "bg-blue-600 text-sm" : "text-zinc-400 border border-zinc-700 text-xs"}  px-2 py-1 rounded-full`}
              onClick={(e) => setActiveFilter("active")}
            >
              Active · {employees.filter((e) => e.status === "active").length}
            </button>
            <button
              className={` ${activeFilter === "pending" ? "bg-blue-600 text-sm" : "text-zinc-400 border border-zinc-700 text-xs"} px-2 py-1 rounded-full`}
              onClick={(e) => setActiveFilter("pending")}
            >
              Pending · {employees.filter((e) => e.status === "pending").length}
            </button>
            <button
              className={` ${activeFilter === "inactive" ? "bg-blue-600 text-sm" : "text-zinc-400 border border-zinc-700 text-xs"} px-2  py-1 rounded-full`}
              onClick={(e) => setActiveFilter("inactive")}
            >
              Inactive ·
              {employees.filter((e) => e.status === "inactive").length}
            </button>
          </div>
          <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded-4xl">
            + Add employee
          </button>
        </div>
      </div>
      <div className="flex flex-col bg-zinc-900 rounded-4xl mx-4 mb-14  border-1 divide-y flex-1 overflow-y-auto  ">
        {employees
          .filter((e) =>
            activeFilter != "all" ? e.status === activeFilter : e,
          )
          .map((e) => {
            return (
              <div
                key={e.user.id}
                className="flex justify-between items-center px-4 py-4"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full text-xs bg-zinc-800 p-2 w-9 h-9 text-center flex justify-center items-center">
                    {`${e.user.firstname.charAt(0)}${e.user.lastname.charAt(0)}`}
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold text-sm h-4">{`${e.user.firstname} ${e.user.lastname}`}</div>
                    <div className="text-xs text-zinc-500">
                      {`${e.user.email}`}
                    </div>
                  </div>
                </div>
                <div
                  className={`text-xs rounded-4xl ${e.status === "active" ? "bg-green-900 text-green-400" : "bg-yellow-900 text-yellow-400"} px-2 py-1 `}
                >
                  {`${e.status}`}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
