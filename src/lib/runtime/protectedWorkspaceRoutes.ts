import type { ProtectedWorkspaceRoute } from "./protectedWorkspaceRoute";

export const protectedWorkspaceRoutes: ProtectedWorkspaceRoute[] = [
  {
    route: "/dashboard/executive",
    workspaceId: "executive",
    workspaceName: "Executive Workspace",
    requiredFeatureKey: "workspace.executive",
    requiresActiveSubscription: true,
    redirectOnDenied: "/billing"
  },
  {
    route: "/dashboard/administration",
    workspaceId: "administration",
    workspaceName: "Administration Workspace",
    requiredFeatureKey: "workspace.administration",
    requiresActiveSubscription: true,
    redirectOnDenied: "/billing"
  }
];