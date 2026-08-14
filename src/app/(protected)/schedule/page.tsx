"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";

// An object that contains the starting and ending hours, the specific date of a shift and the position fulfilled
interface ShiftAssignment {
  start: string;
  end: string;
  date: string;
  position: { name: string };
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

// Grabs today's date and return the range of the current week from startDate (Monday) to endDate (Sunday)
const getWeekRange = (): { startDate: Date; endDate: Date } => {
  const today = new Date();

  const dayOfWeek = today.getDay();

  const daysFromMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

  const monday = new Date();

  monday.setDate(today.getDate() - daysFromMonday);

  const sunday = new Date();
  sunday.setDate(monday.getDate() + 6);

  return { startDate: monday, endDate: sunday };
};

const getDayMonthString = (day: number): String => {
  const range = getWeekRange();

  const date = new Date(range.startDate);
  date.setDate(range.startDate.getDate() + day);

  let stringDay = date.getDate().toString(); //16th

  if (date.getDate() === 1 || date.getDate() === 21 || date.getDate() === 31) {
    stringDay = stringDay + "st";
  } else if (date.getDate() === 2 || date.getDate() === 22) {
    stringDay = stringDay + "nd";
  } else if (date.getDate() === 3 || date.getDate() === 23) {
    stringDay = stringDay + "rd";
  } else if (
    (date.getDate() >= 4 && date.getDate() <= 20) ||
    (date.getDate() >= 24 && date.getDate() <= 30)
  ) {
    stringDay = stringDay + "th";
  }

  stringDay =
    stringDay + ` ${date.toLocaleDateString("en-US", { month: "long" })}`;

  return stringDay;
};

export default function SchedulePage() {
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  const weekNames = [
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const today = new Date();

  const todayIndex = today.getDay() === 0 ? 6 : today.getDay() - 1;
  const [selectedDay, setSelectedDay] = useState<number>(todayIndex);
  const [selectedCell, setSelectedCell] = useState<{
    userId: string;
    date: Date;
  } | null>(null);
  const { userId } = useAuth();

  const weekRange = getWeekRange();

  const { token, locationId } = useAuth();

  // On page load get the Monday and Sunday of the current week and retreive the schedule from that interval with the locadionId
  useEffect(() => {
    const getSchedules = async () => {
      try {
        const response = await fetch(
          `/api/shifts?locationId=${locationId}&startDate=${weekRange.startDate.toISOString()}&endDate=${weekRange.endDate.toISOString()}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );

        const data = await response.json();
        setSchedules(data);
      } catch (e) {
        console.log(e);
      }
    };

    getSchedules();
  }, []);

  // Helper function that return the object representing a shift of an individual on a specific day.
  // It takes in a columnIndex from 0 to 6 representing Monday to Sunday.
  // Extracts the dayOfWeek from the shifts in  the assignments array, calculates the index and compares it with colIndex
  // This essentially will be used to build an array of length 7 containing all the days the user might have a shift or undefined
  // when the user does not have a shift.
  const getShiftForDay = (assignments: ShiftAssignment[], colIndex: number) => {
    return assignments.find((shift) => {
      const dayOfWeek = new Date(shift.date).getDay();
      const col = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
      return col === colIndex;
    });
  };

  return (
    <>
      <div className="lg:hidden">
        <div className="grid grid-cols-7 mx-1">
          {weekNames.map((day, index) => {
            const date = new Date(weekRange.startDate);
            date.setDate(weekRange.startDate.getDate() + index);

            const hasShifts = schedules.some((s) =>
              getShiftForDay(s.user.shiftAssignments, index),
            );

            return (
              <button
                onClick={() => setSelectedDay(index)}
                key={day}
                className={`relative text-center p-2 rounded-lg my-2 ${index === selectedDay ? "bg-blue-500 text-white" : ""}`}
              >
                <div>{day.substring(0, 2)}</div>
                <div>
                  {date.getDate()}
                  {hasShifts && (
                    <div className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
        <div className="text-xl font-bold px-3 py-2 my-2">{`${weekNames[selectedDay]} ${getDayMonthString(selectedDay)}`}</div>
        <div className="w-4/5 mb-3">
          <hr className="h-3 border-t-2" />
        </div>
        {schedules
          .filter((s) => getShiftForDay(s.user.shiftAssignments, selectedDay))
          .sort((a, b) => (a.user.id === userId ? -1 : 1))
          .map((s) => {
            const todayShift = getShiftForDay(
              s.user.shiftAssignments,
              selectedDay,
            )!;

            return (
              <div key={s.user.id} className="p-4 mx-4 my-2 rounded-lg border">
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
      <div className="hidden lg:block">
        <div className="grid grid-cols-8">
          <div className="p-2 text-sm font-medium text-center border-b"></div>
          {weekNames.map((day, index) => {
            const date = new Date(weekRange.startDate);
            date.setDate(weekRange.startDate.getDate() + index);
            return (
              <div
                key={day}
                className={`p-2 text-sm font-medium text-center border-b ${index === todayIndex ? "text-blue-500" : ""}`}
              >
                <div>{day.substring(0, 3)}</div>
                <div>{date.getDate()}</div>
              </div>
            );
          })}
        </div>
        {schedules.map((schedule: Schedule) => {
          // Build an array representing a week of a user's schedule, an index may contains a ShiftAssignment object or undefined
          const days = [0, 1, 2, 3, 4, 5, 6].map((colIndex) =>
            getShiftForDay(schedule.user.shiftAssignments, colIndex),
          );

          return (
            <div key={schedule.user.id} className="grid grid-cols-8">
              <div className="p-2 text-sm font-medium border-b flex items-center justify-center">{`${schedule.user.firstname} ${schedule.user.lastname}`}</div>
              {days.map((shift, index) => (
                <div
                  key={index}
                  className="p-2 text-sm font-medium border-b  group cursor-pointer flex items-center w-full"
                  onClick={() => {
                    const date = new Date(weekRange.startDate);
                    date.setDate(weekRange.startDate.getDate() + index);
                    setSelectedCell({ userId: schedule.user.id, date });
                  }}
                >
                  {/* If a shift exists for that day then represent that column with the starting hour followed by ending hour of that shift, else null */}
                  {shift ? (
                    <div className="rounded-md bg-blue-500 text-white text-xs p-1 text-center w-full ">
                      <div>{shift.position.name}</div>
                      <div>
                        {shift.start} – {shift.end}
                      </div>
                    </div>
                  ) : (
                    <div className="opacity-0 group-hover:opacity-30 text-white text-lg leading-none group-hover:border group-hover:border-blue-500 group-hover:rounded-md w-full h-full flex justify-center items-center">
                      +
                    </div>
                  )}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}
