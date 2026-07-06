import type { ProtectedWorkspaceRoute } from "./protectedWorkspaceRoute";

export type ProtectedWorkspaceResolutionResult = {
  isProtected: boolean;
  route: ProtectedWorkspaceRoute | null;
};