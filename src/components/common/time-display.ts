import { format } from "date-fns";

export function CurrentTime({ twelve }: { twelve?: boolean }) {
  let res;

  if (twelve) {
    const time = new Date();
    res = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  } else {
    const hours = new Date().getHours();
    const mins = new Date().getMinutes();
    res = hours + ":" + mins;
  }

  return res;
}

export function getCurrentTime() {
  const hours = new Date().getHours();
  const mins = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  const res = hours + ":" + mins + ":" + seconds;

  return res;
}

export function getHowLongTill({
  from,
  to,
}: {
  from: Date;
  to: string;
}): string {
  const [hoursTo, minutesTo] = to.split(":").map(Number);
  const currentHours = from.getHours();
  const currentMinutes = from.getMinutes();
  const currentSeconds = from.getSeconds();

  // Create a target time using the current day but with the `to` hours and minutes
  let targetDate = new Date(from);
  targetDate.setHours(hoursTo, minutesTo, 0, 0); // Set the target time to hours:minutes:00

  // If the target time is before the current time, assume it's the next day
  if (targetDate < from) {
    targetDate.setDate(from.getDate() + 1);
  }

  // Calculate the difference in milliseconds
  const diff = targetDate.getTime() - from.getTime();

  // Convert the difference to hours, minutes, and seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return (
    (hours <= 9 ? "0" : "") +
    hours +
    ":" +
    (minutes <= 9 ? "0" : "") +
    minutes +
    ":" +
    (seconds <= 9 ? "0" : "") +
    seconds
  );
}

export function FullCurrentTime() {
  const hours = new Date().getHours();
  const mins = new Date().getMinutes();
  const sec = new Date().getSeconds();
  const res = hours + ":" + mins + ":" + sec;
  return res;
}

export function formatDateISO({
  date,
  dateFormat,
}: {
  date: string;
  dateFormat: string;
}) {
  const d = new Date(date);
  return format(date, dateFormat);
}

export function dateifyMe({
  year = "0",
  monthIdx = "0",
  date = "0",
  hours = "0",
  minutes = "0",
  seconds = "0",
  milliseconds = "0",
  iso = "0",
}: {
  year?: string;
  str?: string;
  monthIdx?: string;
  date?: string;
  hours?: string;
  minutes?: string;
  seconds?: string;
  milliseconds?: string;
  iso?: string;
}) {
  const newD = new Date(
    parseInt(year),
    parseInt(monthIdx),
    parseInt(date),
    parseInt(hours),
    parseInt(minutes),
    parseInt(seconds),
    parseInt(milliseconds)
  );
  return newD;
}

export function timeIsAfter({
  from,
  to,
}: {
  from: string;
  to: string;
}): boolean {
  from.split(":");
  to.split(":");

  const fromd = dateifyMe({ hours: from[0], minutes: from[1] });
  const tod = dateifyMe({ hours: to[0], minutes: to[1] });
  return fromd > tod;
}
