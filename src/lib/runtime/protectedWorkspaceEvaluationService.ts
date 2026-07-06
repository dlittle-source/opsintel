import type { ProtectedWorkspaceEvaluation } from "./protectedWorkspaceEvaluation";
import type { ProtectedWorkspaceEvaluationResult } from "./protectedWorkspaceEvaluationResult";

export class ProtectedWorkspaceEvaluationService {
  evaluate(
    evaluation: ProtectedWorkspaceEvaluation
  ): ProtectedWorkspaceEvaluationResult {
    return {
      allowed: evaluation.requiresProtection,
      route: null,
    };
  }
}