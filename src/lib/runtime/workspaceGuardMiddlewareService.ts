import { workspaceGuardRedirectMap } from "./workspaceGuardRedirectMap";
import { WorkspaceGuardDecisionResult } from "./workspaceGuardDecisionResult";
import { WorkspaceGuardMiddlewareResult } from "./workspaceGuardMiddlewareResult";

export class WorkspaceGuardMiddlewareService {
  evaluate(
    decision: WorkspaceGuardDecisionResult,
  ): WorkspaceGuardMiddlewareResult {
    return {
      allowed: decision.allowed,
      redirect: decision.allowed
        ? undefined
        : workspaceGuardRedirectMap[decision.decision],
      decision,
    };
  }
}

export const workspaceGuardMiddlewareService =
  new WorkspaceGuardMiddlewareService();