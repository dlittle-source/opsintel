import { PlanKey } from "./planConfig";

export type SupportTier =
  | "community"
  | "standard"
  | "priority";

const supportTierMatrix: Record<PlanKey, SupportTier> = {
  starter: "community",
  professional: "standard",
  enterprise: "priority",
};

export function getSupportTier(
  planKey: PlanKey
): SupportTier {
  return supportTierMatrix[planKey];
}

export function isPrioritySupport(
  planKey: PlanKey
): boolean {
  return getSupportTier(planKey) === "priority";
}