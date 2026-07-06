import type { WorkspaceGuardRuntimeEvaluation } from "./workspaceGuardRuntimeEvaluationTypes";

export interface WorkspaceGuardRuntimeProvider {
  evaluate(
    pathname: string
  ): Promise<WorkspaceGuardRuntimeEvaluation>;
}