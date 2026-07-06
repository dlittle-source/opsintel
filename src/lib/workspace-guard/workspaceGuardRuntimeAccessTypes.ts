import type { WorkspaceGuardRuntimeEvaluation } from "./workspaceGuardRuntimeEvaluationTypes";

export interface WorkspaceGuardRuntimeAccess {
  evaluate(
    pathname: string
  ): Promise<WorkspaceGuardRuntimeEvaluation>;
}