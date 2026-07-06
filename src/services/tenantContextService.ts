import { tenantRepository } from "@/repositories/tenantRepository";

export class TenantContextService {
  async getTenantBySlug(slug: string) {
    return tenantRepository.findBySlug(slug);
  }

  async getTenantById(id: string) {
    return tenantRepository.findById(id);
  }

  async getTenantFromClerkOrganization(
    clerkOrgId: string
  ) {
    return tenantRepository.findByClerkOrgId(clerkOrgId);
  }
}

export const tenantContextService =
  new TenantContextService();