import type { RouteProtectionMiddlewareAdapterResult } from "./routeProtectionMiddlewareAdapterResult";
import type { RouteProtectionMiddlewareIntegration } from "./routeProtectionMiddlewareIntegration";
import { createRouteProtectionMiddlewareIntegration } from "./routeProtectionMiddlewareIntegrationFactory";

export class RouteProtectionMiddlewareIntegrationService {
  integrate(
    pathname: string,
    result: RouteProtectionMiddlewareAdapterResult
  ): RouteProtectionMiddlewareIntegration {
    return createRouteProtectionMiddlewareIntegration(
      pathname,
      result
    );
  }
}