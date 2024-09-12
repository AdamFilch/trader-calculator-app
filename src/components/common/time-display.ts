export function CurrentTime() {
  const hours = new Date().getHours();
  const mins = new Date().getMinutes();
  const res = hours + ":" + mins;
  return res;
}

export function FullCurrentTime() {
  const hours = new Date().getHours();
  const mins = new Date().getMinutes();
  const sec = new Date().getSeconds();
  const res = hours + ":" + mins + ":" + sec;
  return res;
}

export function formatTimestamp() {}
