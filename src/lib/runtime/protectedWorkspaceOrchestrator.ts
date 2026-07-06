import type { ProtectedWorkspaceOrchestration } from "./protectedWorkspaceOrchestration";
import type { ProtectedWorkspaceOrchestrationResult } from "./protectedWorkspaceOrchestrationResult";
import { ProtectedWorkspaceEvaluationService } from "./protectedWorkspaceEvaluationService";

export class ProtectedWorkspaceOrchestrator {
  constructor(
    private readonly evaluationService =
      new ProtectedWorkspaceEvaluationService()
  ) {}

  orchestrate(
    orchestration: ProtectedWorkspaceOrchestration
  ): ProtectedWorkspaceOrchestrationResult {
    const evaluation = this.evaluationService.evaluate({
      context: orchestration.context,
      requiresProtection: true,
    });

    return {
      evaluation,
      success: true,
    };
  }
}