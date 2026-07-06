import type { RouteProtectionResult } from "./routeProtectionResult";

export type RouteProtectionOrchestrator = {
  protectRoute(pathname: string): RouteProtectionResult;
};