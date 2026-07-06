import type { RouteProtectionRequestContext } from "./routeProtectionRequestContext";

export function createRouteProtectionRequestContext(
  pathname: string,
  isAuthenticated: boolean,
  workspaceResolved: boolean,
  hasWorkspaceAccess: boolean
): RouteProtectionRequestContext {
  return {
    pathname,
    isAuthenticated,
    workspaceResolved,
    hasWorkspaceAccess,
  };
}