import type { RouteProtectionResult } from "./routeProtectionResult";

export type RouteProtectionMiddlewareAdapterResult = {
  pathname: string;
  result: RouteProtectionResult;
};