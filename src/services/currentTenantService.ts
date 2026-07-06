import { tenantContextService } from "@/services/tenantContextService";

export class CurrentTenantService {
  async resolveTenant(
    clerkOrgId?: string
  ) {
    if (!clerkOrgId) {
      return null;
    }

    return tenantContextService.getTenantFromClerkOrganization(
      clerkOrgId
    );
  }
}

export const currentTenantService =
  new CurrentTenantService();