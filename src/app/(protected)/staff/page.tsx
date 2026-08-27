"use client";

import { useAuth } from "@/context/AuthContext";

export default function StaffPage() {
  const { locations, activeLocationId, setActiveLocationId } = useAuth();

  return (
    <div className="lg:hidden flex flex-col w-full h-full">
      <div className="px-4 pt-4">
        <div className="flex flex-col">
          <div className="text-xl font-bold">Staff</div>
          <div className="text-sm text-zinc-400">{`11 people · Downtown`}</div>
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex justify-between px-4 py-2 flex-wrap gap-2">
        <div className="flex flex-wrap gap-2">
          <select
            className="text-sm border border-zinc-800 rounded-4xl px-2 bg-zinc-900 h-9"
            value={activeLocationId!}
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
          <button className="text-sm bg-blue-600 px-3 py-1 rounded-full">
            All · 11
          </button>
          <button className="text-sm text-zinc-400 rounded-full px-3 py-1 border border-zinc-700">
            Active · 8
          </button>
          <button className="text-sm text-zinc-400 rounded-full px-3 py-1 border border-zinc-700">
            Pending · 2
          </button>
          <button className="text-sm text-zinc-400 rounded-full px-3 py-1 border border-zinc-700">
            Inactive · 1
          </button>
        </div>
        <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded-4xl">
          + Add employee
        </button>
      </div>
      <div className="flex flex-col  bg-zinc-900 rounded-4xl mx-4 my-2 border-1 divide-y">
        <div className="flex justify-between h-15 items-center  px-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full text-xs bg-zinc-800 p-2 w-9 h-9 text-center flex justify-center items-center">
              PS
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-sm h-4">Priya Shah</div>
              <div className="text-xs text-zinc-500">priya.shah@ezmgmt.app</div>
            </div>
          </div>
          <div className=" text-xs rounded-4xl bg-green-900 text-green-400 px-2 py-1 ">
            Active
          </div>
        </div>
        <div className="flex justify-between h-15 items-center  px-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full text-xs bg-zinc-800 p-2 w-9 h-9 text-center flex justify-center items-center">
              MT
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-sm h-4">Maya Torres</div>
              <div className="text-xs text-zinc-500">
                maya.torres@ezmgmt.app
              </div>
            </div>
          </div>
          <div className=" text-xs rounded-4xl bg-yellow-900 text-yellow-400 px-2 py-1 ">
            Pending
          </div>
        </div>
      </div>
    </div>
  );
}
