import type { RouteProtectionMiddlewareIntegration } from "./routeProtectionMiddlewareIntegration";
import type { RouteProtectionMiddlewareResponse } from "./routeProtectionMiddlewareResponse";

export function createRouteProtectionMiddlewareResponse(
  integration: RouteProtectionMiddlewareIntegration
): RouteProtectionMiddlewareResponse {
  return {
    allowed: integration.result.result.allowed,
    redirectTo: integration.result.result.redirectTo,
    reason: integration.result.result.reason,
  };
}