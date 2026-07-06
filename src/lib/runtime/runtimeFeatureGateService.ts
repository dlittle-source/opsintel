import { subscriptionEnforcementService } from "@/lib/billing/subscriptionEnforcementService";

import { RuntimeFeatureGateContext } from "./runtimeFeatureGateContext";
import { RuntimeFeatureGatePolicy } from "./runtimeFeatureGatePolicy";
import { RuntimeFeatureGateResult } from "./runtimeFeatureGateResult";

export class RuntimeFeatureGateService {
  evaluate(
    context: RuntimeFeatureGateContext,
    policy: RuntimeFeatureGatePolicy,
  ): RuntimeFeatureGateResult {
    const enforcementResult =
      subscriptionEnforcementService.evaluate(
        {
          tenantId: context.tenantId,
          planCode: context.planCode,
          featureKey: context.featureKey,
          currentUsage: context.currentUsage,
          usageLimit: context.usageLimit,
          subscriptionStatus: context.subscriptionStatus,
          requireActiveSubscription: policy.requireSubscription,
        },
        {
          requireActiveSubscription: policy.requireSubscription,
          allowTrialing: true,
          allowPastDue: true,
          allowCanceled: false,
          allowPaused: false,
          enforceUsageLimits: policy.enforceUsageLimits,
          usageLimit: policy.usageLimit,
          upgradeUrl: policy.upgradeUrl,
        },
      );

    return {
      allowed: enforcementResult.allowed,
      decision:
        enforcementResult.decision === "billing_action_required"
          ? "blocked"
          : enforcementResult.decision,
      severity: enforcementResult.severity,
      featureKey: context.featureKey,
      message: enforcementResult.message,
      usageLimit: policy.usageLimit,
      currentUsage: context.currentUsage,
      actionLabel: enforcementResult.actionLabel,
      actionHref: enforcementResult.actionHref,
    };
  }
}

export const runtimeFeatureGateService =
  new RuntimeFeatureGateService();