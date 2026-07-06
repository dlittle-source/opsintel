import { WorkspaceGuardContext } from "./workspaceGuardContext";
import { workspaceGuardDecisionService } from "./workspaceGuardDecisionService";
import { workspaceGuardEvaluator } from "./workspaceGuardEvaluator";
import { workspaceGuardMiddlewareService } from "./workspaceGuardMiddlewareService";
import { WorkspaceGuardMiddlewareResult } from "./workspaceGuardMiddlewareResult";

export class WorkspaceGuardOrchestrator {
  evaluate(
    context: WorkspaceGuardContext,
  ): WorkspaceGuardMiddlewareResult {
    const guardResult =
      workspaceGuardEvaluator.evaluate(context);

    const decision =
      workspaceGuardDecisionService.evaluate(
        guardResult,
      );

    return workspaceGuardMiddlewareService.evaluate(
      decision,
    );
  }
}

export const workspaceGuardOrchestrator =
  new WorkspaceGuardOrchestrator();