import { WorkspaceGuardPolicy } from "./workspaceGuardPolicy";

export class WorkspaceGuardPolicyFactory {
  createDefaultPolicy(): WorkspaceGuardPolicy {
    return {
      requireSubscription: true,
      allowTrialing: true,
      allowPastDue: true,
      allowCanceled: false,
      allowPaused: false,
      enforceUsageLimits: false,
      upgradeUrl: "/dashboard/billing",
    };
  }

  createPolicy(
    workspaceKey: string,
  ): WorkspaceGuardPolicy {
    switch (workspaceKey) {
      case "executive_workspace":
      case "administration_workspace":
      case "command_center":
        return {
          requireSubscription: true,
          allowTrialing: true,
          allowPastDue: true,
          allowCanceled: false,
          allowPaused: false,
          enforceUsageLimits: false,
          upgradeUrl: "/dashboard/billing",
        };

      case "ai_copilot":
        return {
          requireSubscription: true,
          allowTrialing: true,
          allowPastDue: true,
          allowCanceled: false,
          allowPaused: false,
          enforceUsageLimits: true,
          usageLimit: 1000,
          upgradeUrl: "/dashboard/billing",
        };

      default:
        return this.createDefaultPolicy();
    }
  }
}

export const workspaceGuardPolicyFactory =
  new WorkspaceGuardPolicyFactory();