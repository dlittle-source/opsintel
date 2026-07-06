import type { MiddlewareRuntimeAdapterResult } from "./middlewareRuntimeAdapterTypes";

export interface WorkspaceGuardRuntimeEvaluation {
  pathname: string;
  decision: MiddlewareRuntimeAdapterResult;
}

export interface WorkspaceGuardRuntimeEvaluator {
  evaluate(
    pathname: string
  ): Promise<WorkspaceGuardRuntimeEvaluation>;
}