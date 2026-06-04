import {
  SubscriptionTier,
  getSubscriptionPlan,
} from "./subscriptionEngine";

export type BillingCycle =
  | "monthly"
  | "yearly";

export type BillingSummary = {
  tier: SubscriptionTier;

  billingCycle: BillingCycle;

  monthlyPrice: number;

  yearlyPrice: number;

  activePrice: number;

  yearlySavings: number;
};

export function getBillingSummary(
  tier: SubscriptionTier,
  billingCycle: BillingCycle,
): BillingSummary {
  const plan =
    getSubscriptionPlan(tier);

  const yearlyEquivalent =
    plan.monthlyPrice * 12;

  const yearlySavings =
    yearlyEquivalent -
    plan.yearlyPrice;

  return {
    tier,

    billingCycle,

    monthlyPrice: plan.monthlyPrice,

    yearlyPrice: plan.yearlyPrice,

    activePrice:
      billingCycle === "monthly"
        ? plan.monthlyPrice
        : plan.yearlyPrice,

    yearlySavings,
  };
}

export function calculateUpgradeCost(
  currentTier: SubscriptionTier,
  targetTier: SubscriptionTier,
  billingCycle: BillingCycle,
) {
  const current =
    getBillingSummary(
      currentTier,
      billingCycle,
    );

  const target =
    getBillingSummary(
      targetTier,
      billingCycle,
    );

  return Math.max(
    target.activePrice -
      current.activePrice,
    0,
  );
}

export function isPaidPlan(
  tier: SubscriptionTier,
) {
  return tier !== "free";
}

export function isEnterprisePlan(
  tier: SubscriptionTier,
) {
  return tier === "enterprise";
}

export function getRecommendedUpgrade(
  tier: SubscriptionTier,
): SubscriptionTier | null {
  switch (tier) {
    case "free":
      return "professional";

    case "professional":
      return "business";

    case "business":
      return "enterprise";

    default:
      return null;
  }
}