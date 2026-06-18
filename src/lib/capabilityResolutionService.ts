import { getFeatureFlags } from "@/lib/featureFlagEngine";
import { getLicensingRuntime } from "@/lib/licensingRuntimeEngine";
import { getTenantContext } from "@/lib/tenantContextAdapter";

export interface ResolvedCapability {
  key: string;
  name: string;
  enabled: boolean;
  available: boolean;
  reason: string;
}

export interface CapabilityResolution {
  tenantId: string;
  licensingTier: string;
  capabilities: ResolvedCapability[];
}

export function getCapabilityResolution(): CapabilityResolution {
  const tenant = getTenantContext();
  const licensing = getLicensingRuntime();
  const flags = getFeatureFlags();

  const capabilities: ResolvedCapability[] = flags.map((flag) => ({
    key: flag.key,
    name: flag.name,
    enabled: flag.enabled,
    available: licensing.licenseActive && flag.enabled,
    reason: licensing.licenseActive
      ? flag.enabled
        ? "Available"
        : "Feature Disabled"
      : "License Inactive",
  }));

  return {
    tenantId: tenant.tenantId,
    licensingTier: licensing.tier,
    capabilities,
  };
}

export function getAvailableCapabilities(): ResolvedCapability[] {
  return getCapabilityResolution().capabilities.filter(
    (capability) => capability.available,
  );
}

export function getUnavailableCapabilities(): ResolvedCapability[] {
  return getCapabilityResolution().capabilities.filter(
    (capability) => !capability.available,
  );
}

export function hasCapability(
  capabilityKey: string,
): boolean {
  return getCapabilityResolution().capabilities.some(
    (capability) =>
      capability.key === capabilityKey &&
      capability.available,
  );
}

export function getCapabilityStatus(
  capabilityKey: string,
): ResolvedCapability | undefined {
  return getCapabilityResolution().capabilities.find(
    (capability) => capability.key === capabilityKey,
  );
}