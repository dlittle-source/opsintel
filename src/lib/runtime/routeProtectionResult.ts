import type { RouteProtectionDecision } from "./routeProtectionDecision";

export type RouteProtectionResult = {
  protected: boolean;
  allowed: boolean;
  redirectTo?: string;
  reason?: string;
  decision: RouteProtectionDecision;
};