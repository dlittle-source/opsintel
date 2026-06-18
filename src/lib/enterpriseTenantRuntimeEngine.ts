export type TenantRuntimeStatus = "operational" | "degraded" | "restricted";
export type TenantRuntimeMode = "trial" | "licensed" | "enterprise";

export interface EnterpriseTenantRuntime {
  tenantId: string;
  tenantName: string;
  runtimeMode: TenantRuntimeMode;
  runtimeStatus: TenantRuntimeStatus;
  whiteLabelEnabled: boolean;
  multiTenantEnabled: boolean;
  environment: "development" | "staging" | "production";
  activeUsers: number;
  licensedSeats: number;
  enabledCapabilities: string[];
  restrictedCapabilities: string[];
  lastEvaluatedAt: string;
}

const fallbackTenantRuntime: EnterpriseTenantRuntime = {
  tenantId: "opsintel-default-tenant",
  tenantName: "OpsIntel Enterprise",
  runtimeMode: "enterprise",
  runtimeStatus: "operational",
  whiteLabelEnabled: true,
  multiTenantEnabled: true,
  environment: "development",
  activeUsers: 42,
  licensedSeats: 100,
  enabledCapabilities: [
    "Executive Intelligence",
    "White-Label Administration",
    "Enterprise Configuration",
    "Runtime Policy Evaluation",
    "Commercialization Workspace",
  ],
  restrictedCapabilities: [],
  lastEvaluatedAt: new Date().toISOString(),
};

export function getEnterpriseTenantRuntime(): EnterpriseTenantRuntime {
  return {
    ...fallbackTenantRuntime,
    lastEvaluatedAt: new Date().toISOString(),
  };
}

export function getTenantRuntimeStatus(): TenantRuntimeStatus {
  return getEnterpriseTenantRuntime().runtimeStatus;
}

export function isTenantRuntimeOperational(): boolean {
  return getEnterpriseTenantRuntime().runtimeStatus === "operational";
}

export function isWhiteLabelRuntimeEnabled(): boolean {
  return getEnterpriseTenantRuntime().whiteLabelEnabled;
}

export function getTenantRuntimeCapacityPercentage(): number {
  const runtime = getEnterpriseTenantRuntime();

  if (runtime.licensedSeats <= 0) {
    return 0;
  }

  return Math.round((runtime.activeUsers / runtime.licensedSeats) * 100);
}