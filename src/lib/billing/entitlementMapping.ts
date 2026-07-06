import { PlanKey, getPlanConfig } from "./planConfig";

export type BillingEntitlementKey =
  | "executiveWorkspace"
  | "administrationWorkspace"
  | "runtimeIntelligence"
  | "runtimeGovernance"
  | "runtimeAutomation"
  | "runtimeAnalytics"
  | "runtimeReliability"
  | "runtimeSecurity"
  | "runtimeObservability"
  | "runtimeCostIntelligence"
  | "whiteLabelBranding"
  | "multiTenantManagement"
  | "stripeBilling"
  | "apiAccess"
  | "prioritySupport";

export type BillingEntitlementMap = Record<BillingEntitlementKey, boolean>;

const baseEntitlements: BillingEntitlementMap = {
  executiveWorkspace: true,
  administrationWorkspace: true,
  runtimeIntelligence: false,
  runtimeGovernance: false,
  runtimeAutomation: false,
  runtimeAnalytics: false,
  runtimeReliability: false,
  runtimeSecurity: false,
  runtimeObservability: false,
  runtimeCostIntelligence: false,
  whiteLabelBranding: false,
  multiTenantManagement: false,
  stripeBilling: true,
  apiAccess: false,
  prioritySupport: false,
};

const planEntitlements: Record<PlanKey, Partial<BillingEntitlementMap>> = {
  starter: {
    runtimeIntelligence: true,
  },

  professional: {
    runtimeIntelligence: true,
    runtimeGovernance: true,
    runtimeAutomation: true,
    runtimeAnalytics: true,
    runtimeReliability: true,
    apiAccess: true,
  },

  enterprise: {
    runtimeIntelligence: true,
    runtimeGovernance: true,
    runtimeAutomation: true,
    runtimeAnalytics: true,
    runtimeReliability: true,
    runtimeSecurity: true,
    runtimeObservability: true,
    runtimeCostIntelligence: true,
    whiteLabelBranding: true,
    multiTenantManagement: true,
    apiAccess: true,
    prioritySupport: true,
  },
};

export function getEntitlementsForPlan(planKey: PlanKey): BillingEntitlementMap {
  getPlanConfig(planKey);

  return {
    ...baseEntitlements,
    ...planEntitlements[planKey],
  };
}

export function hasBillingEntitlement(
  planKey: PlanKey,
  entitlementKey: BillingEntitlementKey
): boolean {
  const entitlements = getEntitlementsForPlan(planKey);

  return entitlements[entitlementKey];
}