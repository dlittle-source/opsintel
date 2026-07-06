export type SubscriptionEnforcementContext = {
  tenantId: string;

  planCode?: string | null;

  featureKey?: string | null;

  currentUsage?: number;

  usageLimit?: number;

  subscriptionStatus?: string | null;

  requireActiveSubscription?: boolean;
};