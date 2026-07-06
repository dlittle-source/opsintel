import { WorkspaceGuardContext } from "./workspaceGuardContext";
import { WorkspaceGuardResult } from "./workspaceGuardResult";
import { workspaceGuardService } from "./workspaceGuardService";

export class WorkspaceGuardEvaluator {
  evaluate(
    context: WorkspaceGuardContext,
  ): WorkspaceGuardResult {
    return workspaceGuardService.evaluate({
      tenantId: context.tenantId,
      workspaceKey: context.workspaceKey,
      planCode: context.planCode,
      subscriptionStatus: context.subscriptionStatus,
      currentUsage: context.currentUsage,
      usageLimit: context.usageLimit,
    });
  }
}

export const workspaceGuardEvaluator =
  new WorkspaceGuardEvaluator();