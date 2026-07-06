export type PlanKey = "starter" | "professional" | "enterprise";

export type PlanConfig = {
  key: PlanKey;
  name: string;
  description: string;
  monthlyPrice: number;
};

export const planConfigs: Record<PlanKey, PlanConfig> = {
  starter: {
    key: "starter",
    name: "Starter",
    description: "Core billing access for small teams.",
    monthlyPrice: 99,
  },
  professional: {
    key: "professional",
    name: "Professional",
    description: "Expanded runtime intelligence for growing teams.",
    monthlyPrice: 499,
  },
  enterprise: {
    key: "enterprise",
    name: "Enterprise",
    description: "Full enterprise runtime, white-label, and tenant capabilities.",
    monthlyPrice: 1999,
  },
};

export function getPlanConfig(planKey: PlanKey): PlanConfig {
  return planConfigs[planKey];
}