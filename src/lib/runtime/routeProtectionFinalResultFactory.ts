import type { RouteProtectionExecution } from "./routeProtectionExecution";
import type { RouteProtectionFinalResult } from "./routeProtectionFinalResult";

export function createRouteProtectionFinalResult(
  execution: RouteProtectionExecution
): RouteProtectionFinalResult {
  return {
    pathname: execution.pathname,
    allowed: execution.response.allowed,
    redirectTo: execution.response.redirectTo,
    reason: execution.response.reason,
    execution,
  };
}