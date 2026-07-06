import type { RouteProtectionExecution } from "./routeProtectionExecution";

export type RouteProtectionFinalResult = {
  pathname: string;
  allowed: boolean;
  redirectTo?: string;
  reason?: string;
  execution: RouteProtectionExecution;
};