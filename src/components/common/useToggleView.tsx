import { useState } from "react";

export function useToggle(
  defaultValue: boolean = false
): [boolean, () => void] {
  const [booleanValue, setbooleanValue] = useState(defaultValue ? true : false);

  function toggle() {
    setbooleanValue((prev) => !prev);
  }
  return [booleanValue, toggle];
}
