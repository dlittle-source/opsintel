import type { RouteProtectionMiddlewareIntegration } from "./routeProtectionMiddlewareIntegration";
import type { RouteProtectionMiddlewareResponse } from "./routeProtectionMiddlewareResponse";
import { createRouteProtectionMiddlewareResponse } from "./routeProtectionMiddlewareResponseFactory";

export class RouteProtectionMiddlewareResponseService {
  createResponse(
    integration: RouteProtectionMiddlewareIntegration
  ): RouteProtectionMiddlewareResponse {
    return createRouteProtectionMiddlewareResponse(integration);
  }
}