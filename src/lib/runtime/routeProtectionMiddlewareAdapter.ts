import type { RouteProtectionRequestContext } from "./routeProtectionRequestContext";
import type { RouteProtectionResult } from "./routeProtectionResult";

export type RouteProtectionMiddlewareAdapter = {
  protect(
    context: RouteProtectionRequestContext
  ): RouteProtectionResult;
};