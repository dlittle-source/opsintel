import { getTenantContext } from "@/lib/tenantContextAdapter";

export interface FeatureFlag {
  key: string;
  name: string;
  enabled: boolean;
  category: "core" | "enterprise" | "preview";
}

export interface FeatureFlagRegistry {
  tenantId: string;
  flags: FeatureFlag[];
}

function buildDefaultFlags(): FeatureFlag[] {
  return [
    {
      key: "executive-intelligence",
      name: "Executive Intelligence",
      enabled: true,
      category: "core",
    },
    {
      key: "white-label-admin",
      name: "White-Label Administration",
      enabled: true,
      category: "enterprise",
    },
    {
      key: "enterprise-configuration",
      name: "Enterprise Configuration",
      enabled: true,
      category: "enterprise",
    },
    {
      key: "runtime-policy-engine",
      name: "Runtime Policy Engine",
      enabled: true,
      category: "enterprise",
    },
    {
      key: "tenant-runtime",
      name: "Tenant Runtime",
      enabled: true,
      category: "enterprise",
    },
    {
      key: "autonomous-orchestration",
      name: "Autonomous Orchestration",
      enabled: false,
      category: "preview",
    },
  ];
}

export function getFeatureFlagRegistry(): FeatureFlagRegistry {
  const tenant = getTenantContext();

  return {
    tenantId: tenant.tenantId,
    flags: buildDefaultFlags(),
  };
}

export function getFeatureFlags(): FeatureFlag[] {
  return [...getFeatureFlagRegistry().flags];
}

export function isFeatureEnabled(
  key: string,
): boolean {
  const feature = getFeatureFlags().find(
    (flag) => flag.key === key,
  );

  return feature?.enabled ?? false;
}

export function getEnabledFeatures(): FeatureFlag[] {
  return getFeatureFlags().filter(
    (feature) => feature.enabled,
  );
}

export function getDisabledFeatures(): FeatureFlag[] {
  return getFeatureFlags().filter(
    (feature) => !feature.enabled,
  );
}