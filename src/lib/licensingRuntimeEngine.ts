import { getTenantContext } from "@/lib/tenantContextAdapter";

export type LicensingTier =
  | "Community"
  | "Professional"
  | "Enterprise";

export interface LicensingRuntime {
  tenantId: string;
  tier: LicensingTier;
  licenseActive: boolean;
  expiresAt: string;
  seatLimit: number;
  seatsInUse: number;
  seatsAvailable: number;
  complianceStatus: "Compliant" | "Warning" | "Exceeded";
}

function determineCompliance(
  used: number,
  limit: number,
): "Compliant" | "Warning" | "Exceeded" {
  if (used > limit) {
    return "Exceeded";
  }

  if (used >= Math.floor(limit * 0.9)) {
    return "Warning";
  }

  return "Compliant";
}

export function getLicensingRuntime(): LicensingRuntime {
  const tenant = getTenantContext();

  const seatLimit = tenant.metadata.licensedSeats;
  const seatsInUse = tenant.metadata.activeUsers;

  return {
    tenantId: tenant.tenantId,
    tier: "Enterprise",
    licenseActive: true,
    expiresAt: "2099-12-31T23:59:59Z",
    seatLimit,
    seatsInUse,
    seatsAvailable: Math.max(0, seatLimit - seatsInUse),
    complianceStatus: determineCompliance(
      seatsInUse,
      seatLimit,
    ),
  };
}

export function isLicenseActive(): boolean {
  return getLicensingRuntime().licenseActive;
}

export function getLicensingTier(): LicensingTier {
  return getLicensingRuntime().tier;
}

export function hasAvailableSeats(): boolean {
  return getLicensingRuntime().seatsAvailable > 0;
}

export function getSeatUtilizationPercentage(): number {
  const runtime = getLicensingRuntime();

  if (runtime.seatLimit <= 0) {
    return 0;
  }

  return Math.round(
    (runtime.seatsInUse / runtime.seatLimit) * 100,
  );
}