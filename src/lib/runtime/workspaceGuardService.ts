import { runtimeFeatureGateFactory } from "@/lib/runtime/runtimeFeatureGateFactory";
import { runtimeFeatureGateService } from "@/lib/runtime/runtimeFeatureGateService";
import {
  WorkspaceGuardResult,
  createAllowedWorkspaceGuardResult,
  createBlockedWorkspaceGuardResult,
} from "@/lib/runtime/workspaceGuardResult";

export class WorkspaceGuardService {
  evaluate(params: {
    tenantId: string;
    workspaceKey: string;
    planCode: string;
    subscriptionStatus: string;
    currentUsage?: number;
    usageLimit?: number;
  }): WorkspaceGuardResult {
    const policy = runtimeFeatureGateFactory.createPolicy(
      params.workspaceKey,
    );

    const featureGateResult = runtimeFeatureGateService.evaluate(
      {
        tenantId: params.tenantId,
        featureKey: params.workspaceKey,
        planCode: params.planCode,
        subscriptionStatus: params.subscriptionStatus,
        currentUsage: params.currentUsage ?? 0,
        usageLimit: params.usageLimit,
      },
      policy,
    );

    if (!featureGateResult.allowed) {
      return createBlockedWorkspaceGuardResult({
        status: "upgrade_required",
        reason: "runtime_feature_gate_blocked",
        tenantId: params.tenantId,
        workspaceKey: params.workspaceKey,
        planKey: params.planCode,
        requiredPlanKey: null,
        message:
          featureGateResult.message ??
          "Workspace access requires an upgraded subscription.",
        featureGateResult,
      });
    }

    return createAllowedWorkspaceGuardResult({
      tenantId: params.tenantId,
      workspaceKey: params.workspaceKey,
      planKey: params.planCode,
      featureGateResult,
    });
  }
}

export const workspaceGuardService = new WorkspaceGuardService();