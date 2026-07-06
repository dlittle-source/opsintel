export type RuntimeFeatureGateContext = {
  tenantId: string;

  featureKey: string;

  planCode?: string | null;

  subscriptionStatus?: string | null;

  currentUsage?: number;

  usageLimit?: number;
};