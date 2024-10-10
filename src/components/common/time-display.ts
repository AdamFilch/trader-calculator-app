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

  const res = hours + ":" + (mins < 0 ? "0" : "") + mins;

  return res;
}

export function getHowLongTill({
  from,
  to,
}: {
  from: string;
  to: string;
}): string {
  const froms = from.split(":");
  const tos = to.split(":");
  var startDate = new Date(0, 0, 0, parseInt(froms[0]), parseInt(froms[1]), 0);
  var endDate = new Date(0, 0, 0, parseInt(tos[0]), parseInt(tos[1]), 0);
  var diff = endDate.getTime() - startDate.getTime();
  var hours = Math.floor(diff / 1000 / 60 / 60);
  diff -= hours * 1000 * 60 * 60;
  var minutes = Math.floor(diff / 1000 / 60);

  // If using time pickers with 24 hours format, add the below line get exact hours
  if (hours < 0) hours = hours + 24;

  return (
    (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes
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
