import type { ProtectedWorkspaceRoute } from "./protectedWorkspaceRoute";

export type ProtectedWorkspaceEvaluationResult = {
  allowed: boolean;
  route: ProtectedWorkspaceRoute | null;
  reason?: string;
};