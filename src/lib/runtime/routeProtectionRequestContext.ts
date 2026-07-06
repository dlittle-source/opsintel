export type RouteProtectionRequestContext = {
  pathname: string;
  isAuthenticated: boolean;
  workspaceResolved: boolean;
  hasWorkspaceAccess: boolean;
};