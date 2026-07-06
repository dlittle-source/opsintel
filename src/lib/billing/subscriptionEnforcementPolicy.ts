export type SubscriptionEnforcementPolicy = {
  requireActiveSubscription: boolean;

  allowTrialing: boolean;

  allowPastDue: boolean;

  allowCanceled: boolean;

  allowPaused: boolean;

  enforceUsageLimits: boolean;

  usageLimit?: number;

  upgradeUrl?: string;
};