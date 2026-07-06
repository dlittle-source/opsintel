import type { ProtectedWorkspaceEvaluationResult } from "./protectedWorkspaceEvaluationResult";

export type ProtectedWorkspaceOrchestrationResult = {
  evaluation: ProtectedWorkspaceEvaluationResult;
  success: boolean;
};