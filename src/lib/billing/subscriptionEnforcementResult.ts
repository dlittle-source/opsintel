export type SubscriptionEnforcementDecision =
  | "allowed"
  | "blocked"
  | "restricted"
  | "upgrade_required"
  | "billing_action_required";

export type SubscriptionEnforcementReason =
  | "subscription_active"
  | "subscription_trialing"
  | "subscription_past_due"
  | "subscription_unpaid"
  | "subscription_canceled"
  | "subscription_incomplete"
  | "subscription_paused"
  | "subscription_unknown"
  | "feature_not_in_plan"
  | "usage_limit_reached"
  | "tenant_not_found"
  | "billing_profile_missing";

export type SubscriptionEnforcementSeverity =
  | "info"
  | "warning"
  | "critical";

export type SubscriptionEnforcementResult = {
  allowed: boolean;
  decision: SubscriptionEnforcementDecision;
  reason: SubscriptionEnforcementReason;
  severity: SubscriptionEnforcementSeverity;
  tenantId: string;
  planCode?: string | null;
  featureKey?: string | null;
  message: string;
  actionLabel?: string | null;
  actionHref?: string | null;
};

export function createSubscriptionEnforcementResult(
  result: SubscriptionEnforcementResult,
): SubscriptionEnforcementResult {
  return result;
}