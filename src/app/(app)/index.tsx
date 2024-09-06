import { Redirect, useRootNavigationState } from "expo-router";

export default function IntialRouting() {
  const rootNavigationState = useRootNavigationState();

  if (!rootNavigationState.key) return null;

  return <Redirect href={"/dashboard"} />;
}
