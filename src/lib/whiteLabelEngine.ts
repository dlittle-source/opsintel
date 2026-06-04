import { SubscriptionTier } from "./subscriptionEngine";

export type WhiteLabelConfig = {
  enabled: boolean;

  companyName: string;

  applicationName: string;

  logoText: string;

  primaryColor: string;

  secondaryColor: string;

  accentColor: string;

  supportEmail: string;

  customDomainEnabled: boolean;

  customBrandingEnabled: boolean;
};

export const defaultWhiteLabelConfig: WhiteLabelConfig = {
  enabled: false,

  companyName: "AI DevOps Architecture Generator",

  applicationName:
    "AI DevOps Architecture Generator",

  logoText: "AI-DAG",

  primaryColor: "#06B6D4",

  secondaryColor: "#0F172A",

  accentColor: "#8B5CF6",

  supportEmail: "support@example.com",

  customDomainEnabled: false,

  customBrandingEnabled: false,
};

export function canUseWhiteLabel(
  tier: SubscriptionTier,
) {
  return tier === "enterprise";
}

export function getWhiteLabelConfig(
  tier: SubscriptionTier,
): WhiteLabelConfig {
  if (!canUseWhiteLabel(tier)) {
    return defaultWhiteLabelConfig;
  }

  return {
    ...defaultWhiteLabelConfig,

    enabled: true,

    customDomainEnabled: true,

    customBrandingEnabled: true,
  };
}

export function buildTenantBranding(
  tier: SubscriptionTier,
  overrides?: Partial<WhiteLabelConfig>,
): WhiteLabelConfig {
  const config =
    getWhiteLabelConfig(tier);

  return {
    ...config,
    ...overrides,
  };
}