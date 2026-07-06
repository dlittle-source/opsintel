export type ProtectedWorkspaceRoute = {
  route: string;
  workspaceId: string;
  workspaceName: string;
  requiredFeatureKey: string;
  requiresActiveSubscription: boolean;
  redirectOnDenied?: string;
};