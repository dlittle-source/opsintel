import type { RouteProtectionFinalResult } from "./routeProtectionFinalResult";

export type RouteProtectionRuntime = {
  pathname: string;
  result: RouteProtectionFinalResult;
};