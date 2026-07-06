import type { RouteProtectionFinalResult } from "./routeProtectionFinalResult";
import type { RouteProtectionRuntime } from "./routeProtectionRuntime";

export function createRouteProtectionRuntime(
  pathname: string,
  result: RouteProtectionFinalResult
): RouteProtectionRuntime {
  return {
    pathname,
    result,
  };
}