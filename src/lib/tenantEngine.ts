export type TenantTier =
  | "starter"
  | "professional"
  | "business"
  | "enterprise";

export type Tenant = {
  id: string;

  name: string;

  slug: string;

  tier: TenantTier;

  activeUsers: number;

  workspaceCount: number;

  createdAt: string;

  isActive: boolean;
};

export const demoTenant: Tenant = {
  id: "tenant-demo",

  name: "OpsIntel",

  slug: "opsintel",

  tier: "enterprise",

  activeUsers: 12,

  workspaceCount: 5,

  createdAt: "2026-01-01",

  isActive: true,
};

export function getTenant() {
  return demoTenant;
}

export function isEnterpriseTenant(
  tenant: Tenant,
) {
  return tenant.tier === "enterprise";
}

export function getTenantHealthScore(
  tenant: Tenant,
) {
  let score = 70;

  score += Math.min(
    tenant.activeUsers * 2,
    15,
  );

  score += Math.min(
    tenant.workspaceCount * 2,
    15,
  );

  return Math.min(score, 100);
}