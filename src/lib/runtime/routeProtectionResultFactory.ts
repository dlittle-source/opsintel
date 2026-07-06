import type { RouteProtectionDecision } from "./routeProtectionDecision";
import type { RouteProtectionResult } from "./routeProtectionResult";

export function createRouteProtectionResult(
  decision: RouteProtectionDecision
): RouteProtectionResult {
  return {
    protected: true,
    allowed: decision.allowed,
    redirectTo: decision.redirectTo,
    reason: decision.reason,
    decision,
  };
}