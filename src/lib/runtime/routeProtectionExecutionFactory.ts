import type { RouteProtectionExecution } from "./routeProtectionExecution";
import type { RouteProtectionMiddlewareResponse } from "./routeProtectionMiddlewareResponse";

export function createRouteProtectionExecution(
  pathname: string,
  response: RouteProtectionMiddlewareResponse
): RouteProtectionExecution {
  return {
    pathname,
    response,
  };
}