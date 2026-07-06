import { WorkspaceGuardDecisionResult } from "./workspaceGuardDecisionResult";
import { WorkspaceGuardResult } from "./workspaceGuardResult";

export class WorkspaceGuardDecisionService {
  evaluate(
    result: WorkspaceGuardResult,
  ): WorkspaceGuardDecisionResult {
    if (result.allowed) {
      return {
        decision: "allow",
        allowed: true,
        message: result.message,
      };
    }

    switch (result.status) {
      case "upgrade_required":
        return {
          decision: "upgrade_required",
          allowed: false,
          message: result.message,
        };

      case "tenant_inactive":
        return {
          decision: "tenant_inactive",
          allowed: false,
          message: result.message,
        };

      case "subscription_inactive":
        return {
          decision: "subscription_inactive",
          allowed: false,
          message: result.message,
        };

      case "feature_disabled":
        return {
          decision: "feature_disabled",
          allowed: false,
          message: result.message,
        };

      default:
        return {
          decision: "deny",
          allowed: false,
          message: result.message,
        };
    }
  }
}

export const workspaceGuardDecisionService =
  new WorkspaceGuardDecisionService();