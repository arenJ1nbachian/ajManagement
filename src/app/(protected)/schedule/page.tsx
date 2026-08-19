"use client";

import { useAuth } from "@/context/AuthContext";
import {
  addDays,
  formatLong,
  getMonday,
  todayString,
  fromDateString,
  formatShort,
} from "@/lib/dateUtils";
import { useEffect, useRef, useState } from "react";

// DATE MODEL
// Every date in this component is a "YYYY-MM-DD" string, never a Date object.
// Date objects only exist inside lib/dateUtils, which converts at the edges.
// This means all date comparisons are string === and can't be shifted by timezone.

// An object that contains the starting and ending hours, the specific date of a shift and the position fulfilled
interface ShiftAssignment {
  start: string;
  end: string;
  date: string;
  position: { name: string; id: string };
}

// An object that contains the first and last name of the user along with an array of ShiftAssignment representing all the shifts during a week
interface Schedule {
  user: {
    id: string;
    firstname: string;
    lastname: string;
    shiftAssignments: ShiftAssignment[];
  };
}

interface Positions {
  id: string;
  name: string;
}

const WEEK_NAMES = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function SchedulePage() {
  const { userId, token, locationId } = useAuth();

  const [weekStart, setWeekStart] = useState(() => getMonday(new Date()));

  // weekStart is the only date state. Everything else derives from it.
  // weekDates = the 7 columns, Monday..Sunday, as "YYYY-MM-DD" strings.
  // Not state — recomputed each render, so it can never disagree with weekStart.
  const weekDates = [0, 1, 2, 3, 4, 5, 6].map((i) => addDays(weekStart, i));
  const todayStr = todayString();

  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [positions, setPositions] = useState<Positions[] | null>(null);
  const [positionId, setPositionId] = useState<string>("");
  const [employeeId, setEmployeeId] = useState<string>("");
  const [selectedDay, setSelectedDay] = useState<string>(todayStr);

  const touchStartX = useRef<number>(0);
  const lastTap = useRef<number>(0);

  const [selectedCell, setSelectedCell] = useState<{
    userId: string;
    date: string;
    firstname: string;
    lastname: string;
  } | null>(null);
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleSave = async () => {
    if (!startTime || !endTime || !positionId) {
      return;
    }

    const response = await fetch("/api/shifts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        userId: selectedCell?.userId,
        date: selectedCell!.date,
        start: startTime,
        end: endTime,
        positionId,
      }),
    });

    if (response.ok) {
      setSelectedCell(null);
      setStartTime("");
      setEndTime("");

      getSchedules();
    }
  };

  const getSchedules = async () => {
    try {
      const response = await fetch(
        `/api/shifts?locationId=${locationId}&startDate=${weekDates[0]}&endDate=${weekDates[6]}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      if (!response.ok) {
        console.error("getSchedules failed:", response.status);
        setSchedules([]);
        return;
      }

      const data: Schedule[] = await response.json();

      if (response.ok) {
        setSchedules(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // Refetches whenever the week changes (navigation) or auth resolves.
  // The guard matters: token starts undefined while AuthContext renews it,
  // and firing early would send "Bearer undefined".
  useEffect(() => {
    if (!token || !locationId) return;
    getSchedules();
  }, [token, locationId, weekStart]);

  useEffect(() => {
    const getPositions = async () => {
      try {
        const response = await fetch(
          `/api/positions?locationId=${locationId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );

        if (!response.ok) {
          console.error("Could not retreive positions", response.status);
          return;
        }

        const data = await response.json();

        if (data.length > 0) {
          setPositions(data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getPositions();
  }, []);

  return (
    <>
      <div
        className="lg:hidden  min-h-screen"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          const diff = e.changedTouches[0].clientX - touchStartX.current;
          if (diff < -250) {
            const newStart = addDays(weekStart, 7);
            setWeekStart(newStart);
            setSelectedDay(newStart);
          }
          if (diff > 250) {
            const newStart = addDays(weekStart, -7);
            setWeekStart(newStart);
            setSelectedDay(newStart);
          }
        }}
      >
        <div className="grid grid-cols-7 mx-1">
          {WEEK_NAMES.map((day, index) => {
            const date = weekDates[index];

            // Dot indicator — does ANY employee have a shift this day?
            // .some() short-circuits on the first match; we only need yes/no, not which.
            const hasShifts = schedules?.some((s) =>
              s.user.shiftAssignments.some((a) => a.date === date),
            );

            const isSelectedDate = date === selectedDay;

            return (
              <button
                onClick={() => setSelectedDay(date)}
                key={date}
                className={`relative text-center p-2 rounded-lg my-2 ${isSelectedDate ? "bg-blue-500 text-white" : ""}`}
              >
                <div>{day.substring(0, 2)}</div>
                <div>
                  {date.split("-")[2]}
                  {hasShifts && (
                    <div className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
        <div className="text-xl font-bold px-3 py-2 my-2 flex items-center">
          <div className="text-base lg:text-xl">{formatLong(selectedDay)}</div>
          <div className="ml-auto mr-2 flex gap-1">
            {selectedDay !== todayStr && (
              <button
                onClick={() => {
                  setWeekStart(getMonday(new Date()));
                  setSelectedDay(todayStr);
                }}
                className="bg-blue-500 px-3 py-1 rounded-full text-white text-xs w-fit "
              >
                Today
              </button>
            )}
            {selectedDay >= todayStr && (
              <button
                className="bg-blue-500 px-3 py-1 rounded-full text-white text-xs w-fit "
                // Set selectedCell with the only information known at this point
                onClick={() => {
                  setSelectedCell({
                    userId: "",
                    firstname: "",
                    lastname: "",
                    date: selectedDay,
                  });
                }}
              >
                Add Shift
              </button>
            )}
          </div>
        </div>
        <div className="w-4/5 mb-3">
          <hr className="h-3 border-t-2" />
        </div>
        <div className="overflow-y-auto max-h-[45vh]">
          {schedules
            .filter((s) =>
              s.user.shiftAssignments.some((a) => a.date === selectedDay),
            )
            .sort(
              (a, b) =>
                Number(b.user.id === userId) - Number(a.user.id === userId),
            )
            .map((s) => {
              const todayShift = s.user.shiftAssignments.find(
                (a) => a.date === selectedDay,
              )!;

              // Build the cells/card information
              const cell = {
                userId: s.user.id,
                date: selectedDay,
                firstname: s.user.firstname,
                lastname: s.user.lastname,
              };

              return (
                <div
                  key={s.user.id}
                  className="p-4 mx-4 my-4 rounded-lg border cursor-pointer"
                  onClick={() => {
                    if (todayShift.date < todayStr) return;

                    // Record the time of the click
                    const now = Date.now();

                    // Find the difference of time from the last click to the current click
                    // Lower than 300 implies the card component has been double pressed
                    if (now - lastTap.current < 300) {
                      setSelectedCell(cell); // Opens the modal for shift adding/editing
                      setIsEditing(true); // Sets the modal into editing mode

                      // Preloads the inputs of the modal with the double pressed shift's information
                      setPositionId(todayShift.position.id);
                      setStartTime(todayShift.start);
                      setEndTime(todayShift.end);
                      setEmployeeId(s.user.id);
                    }
                    // Record the current click as the last tap
                    lastTap.current = now;
                  }}
                >
                  <div className="font-medium">{`${s.user.firstname} ${s.user.lastname}`}</div>
                  <div className="text-sm text-muted-foreground">
                    {todayShift.position.name}
                  </div>
                  <div className="text-sm">
                    {todayShift.start} – {todayShift.end}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => {
              const lastMonday = addDays(weekStart, -7);
              setWeekStart(lastMonday);
              setSelectedDay(lastMonday);
            }}
            className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors cursor-pointer"
          >
            ←
          </button>

          <div className="text-sm font-medium">
            {`${formatShort(weekStart)} - ${formatShort(weekDates[6])}`}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setWeekStart(getMonday(new Date()))}
              className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors"
            >
              Today
            </button>
            <button
              onClick={() => {
                const nextMonday = addDays(weekStart, 7);
                setWeekStart(nextMonday);
                setSelectedDay(nextMonday);
              }}
              className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors cursor-pointer"
            >
              →
            </button>
          </div>
        </div>
        <div className="grid grid-cols-8">
          <div className="text-sm font-medium flex justify-center items-center border-b md:text-xs">
            {`STAFF · ${schedules.length}`}
          </div>
          {WEEK_NAMES.map((d, index) => {
            const date = weekDates[index];
            const day = date.split("-")[2];
            const isToday = date === todayStr;
            return (
              <div
                key={date}
                className={`p-2 text-sm font-medium text-center border-b ${isToday ? "text-blue-500" : ""}`}
              >
                <div>{d.substring(0, 3)}</div>
                <div>{day}</div>
              </div>
            );
          })}
        </div>
        {schedules.map((schedule: Schedule) => {
          // One row = one employee. Map the 7 column dates to that employee's shift
          // on each date, or undefined. Index in this array === column position.
          // Matching on the exact date string, not weekday — so "Friday" of one week
          // can't collide with "Friday" of another.
          const days = weekDates.map((date) =>
            schedule.user.shiftAssignments.find((s) => s.date === date),
          );

          return (
            <div key={schedule.user.id} className="grid grid-cols-8">
              <div className="py-2 md:text-xs md:text-center md:flex-col lg:flex-row lg:font-medium border-b flex items-center justify-center gap-1">
                <div>{`${schedule.user.firstname}`}</div>
                <div>{`${schedule.user.lastname}`}</div>
              </div>
              {days.map((shift, index) => {
                // true if this day has already passed, false otherwise.
                // This is to prevent a manager or an owner the functionality of being able to add a shift.
                const dayHasPassed = weekDates[index] < todayStr;

                return (
                  <div
                    key={index}
                    className={`p-2 text-sm font-medium border-b  group ${dayHasPassed ? "" : "cursor-pointer"} flex items-center w-full h-20`}
                    onClick={() => {
                      // If the location of the business does not have any positions setup, forbid the modal from opening
                      if (!positions) {
                        return;
                      } else if (dayHasPassed) {
                        return;
                      }
                      if (shift) {
                        // Preload existing shift details into states to have initial values of the form load up correctly when modal open
                        setStartTime(shift.start);
                        setEndTime(shift.end);
                        setPositionId(shift.position.id);
                        setIsEditing(true);
                      } else {
                        setIsEditing(false); // Changes the title of the modal from "Edit shift" to "New Shift"
                      }

                      // Collect relevant information from selected cell for preperations of an api call
                      setSelectedCell({
                        userId: schedule.user.id,
                        date: weekDates[index],
                        firstname: schedule.user.firstname,
                        lastname: schedule.user.lastname,
                      });
                    }}
                  >
                    {/* If a shift exists for that day then represent that column with the starting hour followed by ending hour of that shift, else null */}
                    {shift ? (
                      <div className="rounded-md bg-blue-500 text-white text-xs p-1 text-center w-full h-full flex flex-col items-center justify-center">
                        <div>{shift.position.name}</div>
                        <div className="md:text-nowrap">
                          {shift.start} – {shift.end}
                        </div>
                      </div>
                    ) : dayHasPassed ? (
                      false
                    ) : (
                      <div className="betterhover:opacity-0 opacity-30 border border-blue-500 rounded-md group-hover:opacity-30 text-white text-lg leading-none group-hover:border group-hover:border-blue-500 group-hover:rounded-md w-full h-full flex justify-center items-center">
                        +
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      {selectedCell && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-zinc-900 p-6 rounded-xl w-96 flex flex-col gap-3.5 overflow-y-auto max-h-[90vh] max-w-[90vw]">
            <h2 className="text-lg font-bold">{`${isEditing ? "Edit Shift" : "New Shift"}`}</h2>
            <div className="text-sm text-zinc-400">
              {`${selectedCell.firstname} ${selectedCell.lastname} `}
              {`${selectedCell.userId ? "-" : ""} ${formatLong(selectedCell.date)}`}
            </div>

            {/* Input for assigning the shift to an employee only displayed in mobile screens */}
            <div className="lg:hidden flex flex-col gap-1">
              <label className="text-sm text-zinc-400">Employee</label>
              <select
                className="bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-sm w-full"
                value={employeeId}
                onChange={(e) => {
                  const id = e.target.value;
                  setEmployeeId(id);
                  const selected = schedules.find((s) => s.user.id === id); // Retreives the information of the user who's id is target.value
                  const existingShift = selected?.user.shiftAssignments.find(
                    (s) => s.date === selectedDay,
                  ); // Retreive the shift of the selected day of this user. Can possibly be null

                  // Preloads the existing modal input's information of the selected user and sets the modal to editing mode
                  if (existingShift) {
                    setStartTime(existingShift.start);
                    setEndTime(existingShift.end);
                    setPositionId(existingShift.position.id);
                    setIsEditing(true);
                  } else {
                    setIsEditing(false);
                  }

                  // Changed selectedCell information with the new values
                  setSelectedCell((prev) => {
                    return {
                      ...prev!,
                      firstname: selected!.user.firstname,
                      lastname: selected!.user.lastname,
                      userId: selected!.user.id,
                    };
                  });
                }}
              >
                <option value="" disabled>
                  Select an employee
                </option>
                {schedules?.map((s) => (
                  <option key={s.user.id} value={s.user.id}>
                    {`${s.user.firstname} ${s.user.lastname}`}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-zinc-400">Start</label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-sm w-full"
              ></input>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-zinc-400">End</label>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-sm w-full"
              ></input>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-zinc-400">Position</label>
              <select
                className="bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-sm w-full"
                value={positionId}
                onChange={(e) => setPositionId(e.target.value)}
              >
                <option value="" disabled>
                  Select a position
                </option>
                {positions?.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-2 justify-end">
              <button
                className="text-sm text-zinc-400 hover:text-white px-4 py-2"
                onClick={() => {
                  // Reset modal to default values
                  setSelectedCell(null);
                  setStartTime("");
                  setEndTime("");
                  setEmployeeId("");
                  setPositionId("");
                  setIsEditing(false);
                }}
              >
                Cancel
              </button>
              <button
                className="text-sm bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={() => handleSave()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
