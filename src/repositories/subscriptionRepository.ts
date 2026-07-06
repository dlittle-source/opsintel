import { prisma } from "@/lib/prisma";

export class SubscriptionRepository {
  async findTenantPlan(tenantId: string) {
    const tenant = await prisma.tenant.findUnique({
      where: {
        id: tenantId,
      },
      select: {
        plan: true,
        status: true,
      },
    });

    return tenant;
  }

  async updatePlan(
    tenantId: string,
    plan:
      | "STARTER"
      | "PROFESSIONAL"
      | "ENTERPRISE"
      | "WHITE_LABEL"
  ) {
    return prisma.tenant.update({
      where: {
        id: tenantId,
      },
      data: {
        plan,
      },
    });
  }
}

export const subscriptionRepository = new SubscriptionRepository();