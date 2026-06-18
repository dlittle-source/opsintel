import { getEnterpriseTenantRuntime } from "@/lib/enterpriseTenantRuntimeEngine";
import { getLicensingRuntime } from "@/lib/licensingRuntimeEngine";
import { getCapabilityResolution } from "@/lib/capabilityResolutionService";

export interface RuntimeStatusSnapshot {
  tenantName: string;
  runtimeStatus: string;
  licensingTier: string;
  complianceStatus: string;
  enabledCapabilities: number;
  totalCapabilities: number;
  overallStatus: "Healthy" | "Attention Required";
}

export function getRuntimeStatusSnapshot(): RuntimeStatusSnapshot {
  const runtime = getEnterpriseTenantRuntime();
  const licensing = getLicensingRuntime();
  const capabilities = getCapabilityResolution();

  const enabledCapabilities =
    capabilities.capabilities.filter(
      (capability) => capability.available,
    ).length;

  const totalCapabilities =
    capabilities.capabilities.length;

  const overallStatus =
    runtime.runtimeStatus === "operational" &&
    licensing.licenseActive
      ? "Healthy"
      : "Attention Required";

  return {
    tenantName: runtime.tenantName,
    runtimeStatus: runtime.runtimeStatus,
    licensingTier: licensing.tier,
    complianceStatus: licensing.complianceStatus,
    enabledCapabilities,
    totalCapabilities,
    overallStatus,
  };
}