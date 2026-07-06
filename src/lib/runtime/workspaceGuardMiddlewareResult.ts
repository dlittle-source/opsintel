import { WorkspaceGuardDecisionResult } from "./workspaceGuardDecisionResult";

export interface WorkspaceGuardMiddlewareResult {
  allowed: boolean;
  redirect?: string;
  decision: WorkspaceGuardDecisionResult;
}