export type RuntimeFeatureGateDecision =
  | "allowed"
  | "restricted"
  | "blocked"
  | "upgrade_required";

export type RuntimeFeatureGateSeverity =
  | "info"
  | "warning"
  | "critical";

export type RuntimeFeatureGateResult = {
  allowed: boolean;
  decision: RuntimeFeatureGateDecision;
  severity: RuntimeFeatureGateSeverity;

  featureKey: string;

  message: string;

  usageLimit?: number;

  currentUsage?: number;

  actionLabel?: string | null;

  actionHref?: string | null;
};