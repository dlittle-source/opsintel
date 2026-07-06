import { prisma } from "@/lib/prisma";

export class OrganizationRepository {
  async findByClerkOrgId(clerkOrgId: string) {
    return prisma.tenant.findUnique({
      where: {
        clerkOrgId,
      },
    });
  }

  async findBySlug(slug: string) {
    return prisma.tenant.findUnique({
      where: {
        slug,
      },
    });
  }
}

export const organizationRepository = new OrganizationRepository();