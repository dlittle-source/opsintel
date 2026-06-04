import {
  SubscriptionTier,
  getSubscriptionPlan,
} from "./subscriptionEngine";

export type UsageCategory =
  | "architectureGenerations"
  | "aiCopilotRequests"
  | "deploymentAnalyses"
  | "complianceAnalyses";

export type UsageSnapshot = {
  architectureGenerations: number;
  aiCopilotRequests: number;
  deploymentAnalyses: number;
  complianceAnalyses: number;
};

export function getUsageLimits(
  tier: SubscriptionTier,
) {
  const plan = getSubscriptionPlan(tier);

  return {
    architectureGenerations:
      plan.architectureGenerationsPerMonth,

    aiCopilotRequests:
      plan.aiCopilotRequestsPerMonth,

    deploymentAnalyses:
      plan.deploymentAnalysesPerMonth,

    complianceAnalyses:
      plan.complianceAnalysesPerMonth,
  };
}

export function getRemainingUsage(
  tier: SubscriptionTier,
  usage: UsageSnapshot,
) {
  const limits = getUsageLimits(tier);

  return {
    architectureGenerations:
      limits.architectureGenerations -
      usage.architectureGenerations,

    aiCopilotRequests:
      limits.aiCopilotRequests -
      usage.aiCopilotRequests,

    deploymentAnalyses:
      limits.deploymentAnalyses -
      usage.deploymentAnalyses,

    complianceAnalyses:
      limits.complianceAnalyses -
      usage.complianceAnalyses,
  };
}

export function hasUsageRemaining(
  tier: SubscriptionTier,
  category: UsageCategory,
  usage: UsageSnapshot,
) {
  const remaining =
    getRemainingUsage(
      tier,
      usage,
    );

  switch (category) {
    case "architectureGenerations":
      return (
        remaining.architectureGenerations > 0
      );

    case "aiCopilotRequests":
      return (
        remaining.aiCopilotRequests > 0
      );

    case "deploymentAnalyses":
      return (
        remaining.deploymentAnalyses > 0
      );

    case "complianceAnalyses":
      return (
        remaining.complianceAnalyses > 0
      );

    default:
      return false;
  }
}

export function getUsagePercentage(
  tier: SubscriptionTier,
  category: UsageCategory,
  usage: UsageSnapshot,
) {
  const limits = getUsageLimits(tier);

  switch (category) {
    case "architectureGenerations":
      return Math.round(
        (usage.architectureGenerations /
          limits.architectureGenerations) *
          100,
      );

    case "aiCopilotRequests":
      return Math.round(
        (usage.aiCopilotRequests /
          limits.aiCopilotRequests) *
          100,
      );

    case "deploymentAnalyses":
      return Math.round(
        (usage.deploymentAnalyses /
          limits.deploymentAnalyses) *
          100,
      );

    case "complianceAnalyses":
      return Math.round(
        (usage.complianceAnalyses /
          limits.complianceAnalyses) *
          100,
      );

    default:
      return 0;
  }
}