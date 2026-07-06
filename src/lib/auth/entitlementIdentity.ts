export interface EntitlementIdentity {
  subscriptionTier: string;
  features: string[];
}

export function getDefaultEntitlementIdentity(): EntitlementIdentity {
  return {
    subscriptionTier: "free",
    features: [],
  };
}