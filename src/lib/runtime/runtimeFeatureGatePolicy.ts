export type RuntimeFeatureGatePolicy = {
  requireSubscription: boolean;

  enforceUsageLimits: boolean;

  usageLimit?: number;

  upgradeUrl?: string;
};