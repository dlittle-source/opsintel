import { PlanKey } from "./planConfig";

export type RuntimeCapability =
  | "intelligence"
  | "governance"
  | "automation"
  | "analytics"
  | "reliability"
  | "security"
  | "observability"
  | "cost";

const capabilityMatrix: Record<PlanKey, RuntimeCapability[]> = {
  starter: [
    "intelligence",
  ],

  professional: [
    "intelligence",
    "governance",
    "automation",
    "analytics",
    "reliability",
  ],

  enterprise: [
    "intelligence",
    "governance",
    "automation",
    "analytics",
    "reliability",
    "security",
    "observability",
    "cost",
  ],
};

export function getRuntimeCapabilities(
  planKey: PlanKey
): RuntimeCapability[] {
  return capabilityMatrix[planKey];
}

export function hasRuntimeCapability(
  planKey: PlanKey,
  capability: RuntimeCapability
): boolean {
  return getRuntimeCapabilities(planKey).includes(capability);
}