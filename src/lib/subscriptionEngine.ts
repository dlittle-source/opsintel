export type SubscriptionTier =
  | "free"
  | "professional"
  | "business"
  | "enterprise";

export type SubscriptionPlan = {
  tier: SubscriptionTier;

  name: string;

  monthlyPrice: number;

  yearlyPrice: number;

  architectureGenerationsPerMonth: number;

  aiCopilotRequestsPerMonth: number;

  deploymentAnalysesPerMonth: number;

  complianceAnalysesPerMonth: number;

  access: {
    executiveWorkspace: boolean;
    commandCenter: boolean;
    intelligenceWorkspace: boolean;
    deploymentWorkspace: boolean;
    complianceWorkspace: boolean;
  };

  features: {
    architectureGenerator: boolean;
    executiveIntelligence: boolean;
    trendAnalysis: boolean;
    deploymentStrategyEngine: boolean;
    complianceEngine: boolean;
    aiCopilot: boolean;
    whiteLabel: boolean;
    apiAccess: boolean;
    customBranding: boolean;
  };
};

export const subscriptionPlans: Record<
  SubscriptionTier,
  SubscriptionPlan
> = {
  free: {
    tier: "free",

    name: "Free",

    monthlyPrice: 0,
    yearlyPrice: 0,

    architectureGenerationsPerMonth: 10,
    aiCopilotRequestsPerMonth: 25,
    deploymentAnalysesPerMonth: 5,
    complianceAnalysesPerMonth: 5,

    access: {
      executiveWorkspace: false,
      commandCenter: true,
      intelligenceWorkspace: false,
      deploymentWorkspace: false,
      complianceWorkspace: false,
    },

    features: {
      architectureGenerator: true,
      executiveIntelligence: false,
      trendAnalysis: false,
      deploymentStrategyEngine: false,
      complianceEngine: false,
      aiCopilot: true,
      whiteLabel: false,
      apiAccess: false,
      customBranding: false,
    },
  },

  professional: {
    tier: "professional",

    name: "Professional",

    monthlyPrice: 49,
    yearlyPrice: 490,

    architectureGenerationsPerMonth: 250,
    aiCopilotRequestsPerMonth: 1000,
    deploymentAnalysesPerMonth: 250,
    complianceAnalysesPerMonth: 250,

    access: {
      executiveWorkspace: true,
      commandCenter: true,
      intelligenceWorkspace: true,
      deploymentWorkspace: true,
      complianceWorkspace: true,
    },

    features: {
      architectureGenerator: true,
      executiveIntelligence: true,
      trendAnalysis: true,
      deploymentStrategyEngine: true,
      complianceEngine: true,
      aiCopilot: true,
      whiteLabel: false,
      apiAccess: false,
      customBranding: false,
    },
  },

  business: {
    tier: "business",

    name: "Business",

    monthlyPrice: 149,
    yearlyPrice: 1490,

    architectureGenerationsPerMonth: 2500,
    aiCopilotRequestsPerMonth: 10000,
    deploymentAnalysesPerMonth: 2500,
    complianceAnalysesPerMonth: 2500,

    access: {
      executiveWorkspace: true,
      commandCenter: true,
      intelligenceWorkspace: true,
      deploymentWorkspace: true,
      complianceWorkspace: true,
    },

    features: {
      architectureGenerator: true,
      executiveIntelligence: true,
      trendAnalysis: true,
      deploymentStrategyEngine: true,
      complianceEngine: true,
      aiCopilot: true,
      whiteLabel: false,
      apiAccess: true,
      customBranding: true,
    },
  },

  enterprise: {
    tier: "enterprise",

    name: "Enterprise",

    monthlyPrice: 499,
    yearlyPrice: 4990,

    architectureGenerationsPerMonth: 999999,
    aiCopilotRequestsPerMonth: 999999,
    deploymentAnalysesPerMonth: 999999,
    complianceAnalysesPerMonth: 999999,

    access: {
      executiveWorkspace: true,
      commandCenter: true,
      intelligenceWorkspace: true,
      deploymentWorkspace: true,
      complianceWorkspace: true,
    },

    features: {
      architectureGenerator: true,
      executiveIntelligence: true,
      trendAnalysis: true,
      deploymentStrategyEngine: true,
      complianceEngine: true,
      aiCopilot: true,
      whiteLabel: true,
      apiAccess: true,
      customBranding: true,
    },
  },
};

export function getSubscriptionPlan(
  tier: SubscriptionTier = "free",
) {
  return subscriptionPlans[tier];
}

export function canAccessWorkspace(
  tier: SubscriptionTier,
  workspace:
    | "executiveWorkspace"
    | "commandCenter"
    | "intelligenceWorkspace"
    | "deploymentWorkspace"
    | "complianceWorkspace",
) {
  return subscriptionPlans[tier].access[workspace];
}

export function hasFeature(
  tier: SubscriptionTier,
  feature:
    | "architectureGenerator"
    | "executiveIntelligence"
    | "trendAnalysis"
    | "deploymentStrategyEngine"
    | "complianceEngine"
    | "aiCopilot"
    | "whiteLabel"
    | "apiAccess"
    | "customBranding",
) {
  return subscriptionPlans[tier].features[feature];
}