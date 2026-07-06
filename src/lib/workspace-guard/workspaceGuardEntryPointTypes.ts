import type { WorkspaceGuardRuntimeEvaluation } from "./workspaceGuardRuntimeEvaluationTypes";

export interface WorkspaceGuardEntryPoint {
  evaluate(
    pathname: string
  ): Promise<WorkspaceGuardRuntimeEvaluation>;
}