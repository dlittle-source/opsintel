import type { WorkspaceGuardRuntimeEvaluation } from "./workspaceGuardRuntimeEvaluationTypes";

export interface WorkspaceGuardRuntimeBootstrap {
  evaluate(
    pathname: string
  ): Promise<WorkspaceGuardRuntimeEvaluation>;
}