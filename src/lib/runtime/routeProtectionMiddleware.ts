import type { RouteProtectionResult } from "./routeProtectionResult";

export type RouteProtectionMiddleware = {
  protect(pathname: string): RouteProtectionResult;
};