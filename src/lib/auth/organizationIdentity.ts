export interface OrganizationIdentity {
  organizationId: string | null;
  organizationName: string | null;
  tenantId: string;
  role: string;
}

export function getDefaultOrganizationIdentity(): OrganizationIdentity {
  return {
    organizationId: null,
    organizationName: null,
    tenantId: "default",
    role: "viewer",
  };
}