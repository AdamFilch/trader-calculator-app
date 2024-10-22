import { useState } from "react";

export function useToggle(
  defaultValue: boolean = false
): [boolean, (bool?: boolean) => void] {
  const [booleanValue, setbooleanValue] = useState(defaultValue ? true : false);

  function toggle(bool?: boolean) {
    if (bool) {
      setbooleanValue(bool);
    } else {
      setbooleanValue((prev) => !prev);
    }
  }
  return [booleanValue, toggle];
}
