import { getCurrentOrganizationIdentity } from "./currentOrganization";
import { getCurrentTenantIdentity } from "./currentUser";

export interface TenantContext {
  userId: string | null;
  tenantId: string;
  organizationId: string | null;
  organizationName: string | null;
  role: string;
  authProvider: "clerk";
}

export async function getTenantContext(): Promise<TenantContext> {
  const tenantIdentity = await getCurrentTenantIdentity();
  const organizationIdentity = await getCurrentOrganizationIdentity();

  return {
    userId: tenantIdentity.userId,
    tenantId: organizationIdentity.tenantId,
    organizationId: organizationIdentity.organizationId,
    organizationName: organizationIdentity.organizationName,
    role: organizationIdentity.role,
    authProvider: "clerk",
  };
}