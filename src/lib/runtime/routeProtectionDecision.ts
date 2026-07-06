export type RouteProtectionDecision = {
  allowed: boolean;
  redirectTo?: string;
  reason?: string;
};

export type RouteProtectionDecisionInput = {
  isAuthenticated: boolean;
  workspaceResolved: boolean;
  hasWorkspaceAccess: boolean;
};