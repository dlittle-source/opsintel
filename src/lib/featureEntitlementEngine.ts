import {
  SubscriptionTier,
  hasFeature,
} from "./subscriptionEngine";

export type PlatformFeature =
  | "architectureGenerator"
  | "executiveIntelligence"
  | "trendAnalysis"
  | "deploymentStrategyEngine"
  | "complianceEngine"
  | "aiCopilot"
  | "whiteLabel"
  | "apiAccess"
  | "customBranding";

export function isFeatureEnabled(
  tier: SubscriptionTier,
  feature: PlatformFeature,
) {
  return hasFeature(tier, feature);
}

export function getLockedFeatures(
  tier: SubscriptionTier,
): PlatformFeature[] {
  const allFeatures: PlatformFeature[] = [
    "architectureGenerator",
    "executiveIntelligence",
    "trendAnalysis",
    "deploymentStrategyEngine",
    "complianceEngine",
    "aiCopilot",
    "whiteLabel",
    "apiAccess",
    "customBranding",
  ];

  return allFeatures.filter(
    (feature) => !hasFeature(tier, feature),
  );
}

export function getEnabledFeatures(
  tier: SubscriptionTier,
): PlatformFeature[] {
  const allFeatures: PlatformFeature[] = [
    "architectureGenerator",
    "executiveIntelligence",
    "trendAnalysis",
    "deploymentStrategyEngine",
    "complianceEngine",
    "aiCopilot",
    "whiteLabel",
    "apiAccess",
    "customBranding",
  ];

  return allFeatures.filter((feature) =>
    hasFeature(tier, feature),
  );
}

export function canUseExecutiveAI(
  tier: SubscriptionTier,
) {
  return hasFeature(
    tier,
    "executiveIntelligence",
  );
}

export function canUseComplianceEngine(
  tier: SubscriptionTier,
) {
  return hasFeature(
    tier,
    "complianceEngine",
  );
}

export function canUseDeploymentStrategy(
  tier: SubscriptionTier,
) {
  return hasFeature(
    tier,
    "deploymentStrategyEngine",
  );
}

export function canUseWhiteLabel(
  tier: SubscriptionTier,
) {
  return hasFeature(
    tier,
    "whiteLabel",
  );
}

export function canUseAPI(
  tier: SubscriptionTier,
) {
  return hasFeature(
    tier,
    "apiAccess",
  );
}