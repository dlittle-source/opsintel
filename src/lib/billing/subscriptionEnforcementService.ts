import { SubscriptionEnforcementContext } from "./subscriptionEnforcementContext";
import { SubscriptionEnforcementPolicy } from "./subscriptionEnforcementPolicy";
import {
  SubscriptionEnforcementResult,
  createSubscriptionEnforcementResult,
} from "./subscriptionEnforcementResult";

export class SubscriptionEnforcementService {
  evaluate(
    context: SubscriptionEnforcementContext,
    policy: SubscriptionEnforcementPolicy,
  ): SubscriptionEnforcementResult {
    const status = context.subscriptionStatus ?? "unknown";

    if (policy.requireActiveSubscription) {
      if (status === "active") {
        if (
          policy.enforceUsageLimits &&
          policy.usageLimit !== undefined &&
          context.currentUsage !== undefined &&
          context.currentUsage >= policy.usageLimit
        ) {
          return createSubscriptionEnforcementResult({
            allowed: false,
            decision: "upgrade_required",
            reason: "usage_limit_reached",
            severity: "warning",
            tenantId: context.tenantId,
            planCode: context.planCode,
            featureKey: context.featureKey,
            message: "Usage limit reached.",
            actionLabel: "Upgrade Plan",
            actionHref:
              policy.upgradeUrl ?? "/dashboard/billing",
          });
        }

        return createSubscriptionEnforcementResult({
          allowed: true,
          decision: "allowed",
          reason: "subscription_active",
          severity: "info",
          tenantId: context.tenantId,
          planCode: context.planCode,
          featureKey: context.featureKey,
          message: "Subscription access granted.",
          actionLabel: null,
          actionHref: null,
        });
      }

      if (status === "trialing" && policy.allowTrialing) {
        return createSubscriptionEnforcementResult({
          allowed: true,
          decision: "allowed",
          reason: "subscription_trialing",
          severity: "info",
          tenantId: context.tenantId,
          planCode: context.planCode,
          featureKey: context.featureKey,
          message: "Trial access granted.",
          actionLabel: null,
          actionHref: null,
        });
      }

      if (status === "past_due" && policy.allowPastDue) {
        return createSubscriptionEnforcementResult({
          allowed: true,
          decision: "restricted",
          reason: "subscription_past_due",
          severity: "warning",
          tenantId: context.tenantId,
          planCode: context.planCode,
          featureKey: context.featureKey,
          message: "Subscription payment is past due.",
          actionLabel: "Update Payment Method",
          actionHref: "/dashboard/billing",
        });
      }

      if (status === "paused" && policy.allowPaused) {
        return createSubscriptionEnforcementResult({
          allowed: true,
          decision: "restricted",
          reason: "subscription_paused",
          severity: "warning",
          tenantId: context.tenantId,
          planCode: context.planCode,
          featureKey: context.featureKey,
          message: "Subscription is paused.",
          actionLabel: "Resume Subscription",
          actionHref: "/dashboard/billing",
        });
      }

      if (status === "canceled" && policy.allowCanceled) {
        return createSubscriptionEnforcementResult({
          allowed: true,
          decision: "restricted",
          reason: "subscription_canceled",
          severity: "warning",
          tenantId: context.tenantId,
          planCode: context.planCode,
          featureKey: context.featureKey,
          message: "Subscription has been canceled.",
          actionLabel: "Reactivate Subscription",
          actionHref: "/dashboard/billing",
        });
      }

      if (status === "unpaid") {
        return createSubscriptionEnforcementResult({
          allowed: false,
          decision: "billing_action_required",
          reason: "subscription_unpaid",
          severity: "critical",
          tenantId: context.tenantId,
          planCode: context.planCode,
          featureKey: context.featureKey,
          message: "Subscription payment failed.",
          actionLabel: "Update Payment Method",
          actionHref: "/dashboard/billing",
        });
      }

      if (status === "incomplete") {
        return createSubscriptionEnforcementResult({
          allowed: false,
          decision: "billing_action_required",
          reason: "subscription_incomplete",
          severity: "critical",
          tenantId: context.tenantId,
          planCode: context.planCode,
          featureKey: context.featureKey,
          message: "Subscription setup is incomplete.",
          actionLabel: "Complete Subscription",
          actionHref: "/dashboard/billing",
        });
      }

      return createSubscriptionEnforcementResult({
        allowed: false,
        decision: "billing_action_required",
        reason: "subscription_unknown",
        severity: "warning",
        tenantId: context.tenantId,
        planCode: context.planCode,
        featureKey: context.featureKey,
        message: "An active subscription is required.",
        actionLabel: "Manage Billing",
        actionHref: "/dashboard/billing",
      });
    }

    return createSubscriptionEnforcementResult({
      allowed: true,
      decision: "allowed",
      reason: "subscription_active",
      severity: "info",
      tenantId: context.tenantId,
      planCode: context.planCode,
      featureKey: context.featureKey,
      message: "Subscription access granted.",
      actionLabel: null,
      actionHref: null,
    });
  }
}

export const subscriptionEnforcementService =
  new SubscriptionEnforcementService();