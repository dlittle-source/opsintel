import type { ProtectedWorkspaceContext } from "./protectedWorkspaceContext";

export type ProtectedWorkspaceOrchestration = {
  context: ProtectedWorkspaceContext;
  pathname: string;
};