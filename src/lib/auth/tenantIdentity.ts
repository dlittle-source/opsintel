export interface TenantIdentity {
  userId: string | null;
  tenantId: string;
  organizationId: string | null;
  role: string;
}

export function getDefaultTenantIdentity(): TenantIdentity {
  return {
    userId: null,
    tenantId: "default",
    organizationId: null,
    role: "viewer",
  };
}