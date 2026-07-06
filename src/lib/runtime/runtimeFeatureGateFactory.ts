import { RuntimeFeatureGatePolicy } from "./runtimeFeatureGatePolicy";

export class RuntimeFeatureGateFactory {
  createDefaultPolicy(): RuntimeFeatureGatePolicy {
    return {
      requireSubscription: true,
      enforceUsageLimits: false,
      usageLimit: undefined,
      upgradeUrl: "/dashboard/billing",
    };
  }

  createPolicy(
    featureKey: string,
  ): RuntimeFeatureGatePolicy {
    switch (featureKey) {
      case "executive_workspace":
      case "administration_workspace":
      case "command_center":
        return {
          requireSubscription: true,
          enforceUsageLimits: false,
          upgradeUrl: "/dashboard/billing",
        };

      case "ai_copilot":
        return {
          requireSubscription: true,
          enforceUsageLimits: true,
          usageLimit: 1000,
          upgradeUrl: "/dashboard/billing",
        };

      default:
        return this.createDefaultPolicy();
    }
  }
}

export const runtimeFeatureGateFactory =
  new RuntimeFeatureGateFactory();