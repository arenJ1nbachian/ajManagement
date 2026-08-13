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

export default function SchedulePage() {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const { token, locationId } = useAuth();

  // On page load get the Monday and Sunday of the current week and retreive the schedule from that interval with the locadionId
  useEffect(() => {
    const weekRange = getWeekRange();

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
      <div className="grid grid-cols-8">
        <div className="p-2 text-sm font-medium text-center border-b"></div>
        <div className="p-2 text-sm font-medium text-center border-b">Mon</div>
        <div className="p-2 text-sm font-medium text-center border-b">Tue</div>
        <div className="p-2 text-sm font-medium text-center border-b">Wed</div>
        <div className="p-2 text-sm font-medium text-center border-b">Thu</div>
        <div className="p-2 text-sm font-medium text-center border-b">Fri</div>
        <div className="p-2 text-sm font-medium text-center border-b">Sat</div>
        <div className="p-2 text-sm font-medium text-center border-b">Sun</div>
      </div>
      {schedules.map((schedule) => {
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
                className="p-2 text-sm font-medium text-center border-b"
              >
                {/* If a shift exists for that day then represent that column with the starting hour followed by ending hour of that shift, else null */}
                {shift ? (
                  <div className="rounded-md bg-blue-500 text-white text-xs p-1 text-center">
                    <div>{shift.position.name}</div>
                    <div>
                      {shift.start} – {shift.end}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
}
