import {
  EnterpriseTenantRuntime,
  getEnterpriseTenantRuntime,
} from "@/lib/enterpriseTenantRuntimeEngine";

export interface TenantContext {
  tenantId: string;
  tenantName: string;
  environment: string;
  runtimeMode: string;
  runtimeStatus: string;

  whiteLabelEnabled: boolean;
  multiTenantEnabled: boolean;

  capabilities: string[];

  metadata: {
    activeUsers: number;
    licensedSeats: number;
    utilizationPercentage: number;
  };
}

function calculateUtilization(
  runtime: EnterpriseTenantRuntime,
): number {
  if (runtime.licensedSeats <= 0) {
    return 0;
  }

  return Math.round(
    (runtime.activeUsers / runtime.licensedSeats) * 100,
  );
}

export function getTenantContext(): TenantContext {
  const runtime = getEnterpriseTenantRuntime();

  return {
    tenantId: runtime.tenantId,
    tenantName: runtime.tenantName,

    environment: runtime.environment,
    runtimeMode: runtime.runtimeMode,
    runtimeStatus: runtime.runtimeStatus,

    whiteLabelEnabled: runtime.whiteLabelEnabled,
    multiTenantEnabled: runtime.multiTenantEnabled,

    capabilities: [...runtime.enabledCapabilities],

    metadata: {
      activeUsers: runtime.activeUsers,
      licensedSeats: runtime.licensedSeats,
      utilizationPercentage: calculateUtilization(runtime),
    },
  };
}

export function getTenantCapabilities(): string[] {
  return [...getTenantContext().capabilities];
}

export function hasTenantCapability(
  capability: string,
): boolean {
  return getTenantContext().capabilities.includes(capability);
}

export function getTenantEnvironment(): string {
  return getTenantContext().environment;
}

export function getTenantRuntimeSummary() {
  const context = getTenantContext();

  return {
    tenant: context.tenantName,
    status: context.runtimeStatus,
    mode: context.runtimeMode,
    utilization:
      context.metadata.utilizationPercentage,
  };
}