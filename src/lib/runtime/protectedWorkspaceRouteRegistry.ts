// src/lib/runtime/protectedWorkspaceRouteRegistry.ts

import { protectedWorkspaceRoutes } from "./protectedWorkspaceRoutes";
import type { ProtectedWorkspaceRoute } from "./protectedWorkspaceRoute";
import type { ProtectedWorkspaceRouteResult } from "./protectedWorkspaceRouteResult";

export class ProtectedWorkspaceRouteRegistry {
  find(pathname: string): ProtectedWorkspaceRouteResult {
    const route: ProtectedWorkspaceRoute | undefined =
      protectedWorkspaceRoutes.find(
        (route) =>
          pathname === route.route ||
          pathname.startsWith(`${route.route}/`)
      );

    return {
      route:
        route ??
        {
          route: "",
          workspaceId: "",
          workspaceName: "",
          requiredFeatureKey: "",
          requiresActiveSubscription: false
        },
      isProtected: !!route,
      matchedRoute: route?.route ?? null
    };
  }
}