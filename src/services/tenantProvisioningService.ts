import { tenantRepository } from "@/repositories/tenantRepository";

export class TenantProvisioningService {
  async provisionTenant(input: {
    name: string;
    slug: string;
    clerkOrgId?: string;
  }) {
    const existingTenant = await tenantRepository.findBySlug(
      input.slug
    );

    if (existingTenant) {
      return existingTenant;
    }

    return tenantRepository.create({
      name: input.name,
      slug: input.slug,
      clerkOrgId: input.clerkOrgId,
    });
  }
}

export const tenantProvisioningService =
  new TenantProvisioningService();