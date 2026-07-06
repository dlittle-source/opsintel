import type { RouteProtectionDecision } from "./routeProtectionDecision";

export type RouteProtectionDecisionResult = {
  decision: RouteProtectionDecision;
  success: boolean;
};