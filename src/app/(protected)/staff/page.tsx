"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";

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

interface Positions {
  id: string;
  name: string;
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

  const [formData, setFormData] = useState<{
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    permission: string;
  }>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    permission: "employee",
  });

  const handleSave = async () => {
    if (!formData.firstname) {
      toast.error("Please provide a first name");
      return;
    }
    if (!formData.lastname) {
      toast.error("Please provide a last name");
      return;
    }
    if (!formData.email) {
      toast.error("Please provide an email address");
      return;
    }

    try {
      const response = await fetch("/api/employees", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          phone: formData.phone,
          role: formData.permission,
          lid: activeLocationId,
        }),
      });

      if (response.ok) {
        toast.success("Employee added! An email confirmation has been sent.");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          permission: "employee",
        });
        setIsModalOpen(false);
        getEmployees();
      } else {
        toast.error("Failed to add employee.");
      }
    } catch (e) {
      toast.error("Something went wrong. Please try again later");
    }
  };

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

  useEffect(() => {
    if (token && activeLocationId) {
      getEmployees();
    }
  }, [activeLocationId, token]);

  return (
    <>
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
                Pending ·{" "}
                {employees.filter((e) => e.status === "pending").length}
              </button>
              <button
                className={` ${activeFilter === "inactive" ? "bg-blue-600 text-sm" : "text-zinc-400 border border-zinc-700 text-xs"} px-2  py-1 rounded-full`}
                onClick={(e) => setActiveFilter("inactive")}
              >
                Inactive ·
                {employees.filter((e) => e.status === "inactive").length}
              </button>
            </div>
            <button
              onClick={(e) => setIsModalOpen(true)}
              className="bg-blue-600 text-white text-sm px-3 py-1 rounded-4xl"
            >
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
                    className={`text-xs rounded-4xl ${e.status === "active" ? "bg-green-900 text-green-400" : e.status === "pending" ? "bg-yellow-900 text-yellow-400" : "bg-zinc-900 text-zinc-400"} px-2 py-1 `}
                  >
                    {`${e.status}`}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="sm:hidden"></div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-zinc-900 p-6 rounded-xl w-135  overflow-y-auto max-h-[90vh] max-w-[90vw] flex flex-col gap-2 mt-3">
            <div className="text-lg font-bold">Add employee</div>
            <div className="text-sm text-zinc-500">
              They'll get an email to finish setting up their account. Their
              status will remains Pending until they do.
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label htmlFor="fname" className="text-sm text-zinc-400">
                  First name
                </label>
                <input
                  id="fname"
                  name="fname"
                  className="bg-zinc-800 border border-zinc-700 px-3 py-2 rounded-xl text-white w-full outline-none focus:border-blue-500"
                  type="text"
                  value={formData.firstname}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      firstname: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="lname" className="text-sm text-zinc-400">
                  Last name
                </label>
                <input
                  id="lname"
                  name="lname"
                  className="bg-zinc-800 border border-zinc-700 px-3 py-2 rounded-xl text-white w-full outline-none focus:border-blue-500"
                  type="text"
                  value={formData.lastname}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      lastname: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-sm text-sm text-zinc-400"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  className="bg-zinc-800 border border-zinc-700 px-3 py-2 rounded-xl text-white w-full outline-none focus:border-blue-500"
                  type="text"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-sm text-zinc-400">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  className="bg-zinc-800 border border-zinc-700 px-3 py-2 rounded-xl text-white w-full outline-none focus:border-blue-500"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-zinc-400">
                  Permission Access
                </label>
                <select
                  value={formData.permission}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      permission: e.target.value,
                    }))
                  }
                  className="bg-zinc-800 border border-zinc-700 px-3 py-2 rounded-xl text-white w-full"
                >
                  <option value={"employee"}>Employee</option>
                  <option value={"manager"}>Manager</option>
                </select>
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={(e) => {
                    setIsModalOpen(false);
                    setFormData({
                      firstname: "",
                      lastname: "",
                      email: "",
                      phone: "",
                      permission: "employee",
                    });
                  }}
                  className="flex-1 border border-zinc-700 rounded-xl py-2 text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSave()}
                  className="flex-1 bg-blue-600 rounded-xl py-2 text-sm"
                >
                  Send Invite
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
