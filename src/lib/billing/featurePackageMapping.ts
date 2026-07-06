import { PlanKey } from "./planConfig";

export type FeaturePackage =
  | "executive"
  | "administration"
  | "runtime-core"
  | "runtime-advanced"
  | "runtime-enterprise"
  | "api"
  | "white-label"
  | "priority-support";

const packageMatrix: Record<PlanKey, FeaturePackage[]> = {
  starter: [
    "executive",
    "administration",
    "runtime-core",
  ],

  professional: [
    "executive",
    "administration",
    "runtime-core",
    "runtime-advanced",
    "api",
  ],

  enterprise: [
    "executive",
    "administration",
    "runtime-core",
    "runtime-advanced",
    "runtime-enterprise",
    "api",
    "white-label",
    "priority-support",
  ],
};

export function getFeaturePackages(
  planKey: PlanKey
): FeaturePackage[] {
  return packageMatrix[planKey];
}

export function hasFeaturePackage(
  planKey: PlanKey,
  featurePackage: FeaturePackage
): boolean {
  return getFeaturePackages(planKey).includes(featurePackage);
}