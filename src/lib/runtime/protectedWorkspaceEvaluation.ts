import type { ProtectedWorkspaceContext } from "./protectedWorkspaceContext";

export type ProtectedWorkspaceEvaluation = {
  context: ProtectedWorkspaceContext;
  requiresProtection: boolean;
};