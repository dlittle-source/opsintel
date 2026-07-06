import type { WorkspaceGuardRuntimeEvaluation } from "./workspaceGuardRuntimeEvaluationTypes";

export interface WorkspaceGuardRuntimeOrchestrator {
  evaluate(
    pathname: string
  ): Promise<WorkspaceGuardRuntimeEvaluation>;
}