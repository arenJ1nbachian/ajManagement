// All functions take and return "YYYY-MM-DD" strings, except getMonday which
// takes a Date (the one place a real clock reading enters the system).
//
// Two rules that make this timezone-safe:
//   1. Never toISOString()  — it converts to UTC and shifts the day
//   2. Never new Date(str)  — date-only strings parse as UTC, also shifts
// Instead: read local fields (getFullYear/getMonth/getDate) and build with
// the numeric constructor new Date(y, m-1, d), which is always local.

export function getMonday(d: Date): string {
  const daysFromMonday = d.getDay() === 0 ? 6 : d.getDay() - 1;

  const monday = new Date(d);

  monday.setDate(monday.getDate() - daysFromMonday);

  monday.setHours(0, 0, 0, 0);

  return toDateString(monday);
}

export function toDateString(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function addDays(dateStr: string, n: number): string {
  const date = fromDateString(dateStr);
  date.setDate(date.getDate() + n);

  return toDateString(date);
}

function fromDateString(s: string): Date {
  const [y, m, d] = s.split("-").map(Number);

  return new Date(y, m - 1, d);
}

export function todayString(): string {
  return toDateString(new Date());
}

export function formatLong(dateStr: string): string {
  return fromDateString(dateStr).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}
