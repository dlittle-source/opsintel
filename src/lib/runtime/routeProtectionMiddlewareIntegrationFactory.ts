import type { RouteProtectionMiddlewareAdapterResult } from "./routeProtectionMiddlewareAdapterResult";
import type { RouteProtectionMiddlewareIntegration } from "./routeProtectionMiddlewareIntegration";

export function createRouteProtectionMiddlewareIntegration(
  pathname: string,
  result: RouteProtectionMiddlewareAdapterResult
): RouteProtectionMiddlewareIntegration {
  return {
    pathname,
    protected: result.result.protected,
    result,
  };
}