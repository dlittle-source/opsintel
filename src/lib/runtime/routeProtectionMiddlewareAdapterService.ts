import type { RouteProtectionRequestContext } from "./routeProtectionRequestContext";
import type { RouteProtectionResult } from "./routeProtectionResult";
import { RouteProtectionMiddlewareService } from "./routeProtectionMiddlewareService";

export class RouteProtectionMiddlewareAdapterService {
  constructor(
    private readonly middlewareService =
      new RouteProtectionMiddlewareService()
  ) {}

  protect(
    context: RouteProtectionRequestContext
  ): RouteProtectionResult {
    return this.middlewareService.protect({
      isAuthenticated: context.isAuthenticated,
      workspaceResolved: context.workspaceResolved,
      hasWorkspaceAccess: context.hasWorkspaceAccess,
    });
  }
}