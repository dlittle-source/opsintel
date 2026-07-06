import type { ProtectedWorkspaceContext } from "./protectedWorkspaceContext";

export type ProtectedWorkspaceContextResult = {
  context: ProtectedWorkspaceContext;
  isValid: boolean;
};