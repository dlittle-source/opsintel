import { prisma } from "@/lib/prisma";

export class TenantRepository {
  async findById(id: string) {
    return prisma.tenant.findUnique({
      where: { id },
    });
  }

  async findBySlug(slug: string) {
    return prisma.tenant.findUnique({
      where: { slug },
    });
  }

  async findByClerkOrgId(clerkOrgId: string) {
    return prisma.tenant.findUnique({
      where: {
        clerkOrgId,
      },
    });
  }

  async create(data: {
    name: string;
    slug: string;
    clerkOrgId?: string;
  }) {
    return prisma.tenant.create({
      data,
    });
  }
}

export const tenantRepository = new TenantRepository();