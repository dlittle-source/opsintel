import type { ProtectedWorkspaceRoute } from "./protectedWorkspaceRoute";

export type ProtectedWorkspaceRouteResult = {
  route: ProtectedWorkspaceRoute;
  isProtected: boolean;
  matchedRoute: string | null;
};