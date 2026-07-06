import { prisma } from "@/lib/prisma";

export class BillingRepository {
  async findCustomerByTenantId(tenantId: string) {
    return prisma.billingCustomer.findUnique({
      where: {
        tenantId,
      },
    });
  }

  async findCustomerByStripeId(stripeCustomerId: string) {
    return prisma.billingCustomer.findUnique({
      where: {
        stripeCustomerId,
      },
    });
  }

  async createCustomer(data: {
    tenantId: string;
    stripeCustomerId: string;
    email?: string;
    name?: string;
  }) {
    return prisma.billingCustomer.create({
      data,
    });
  }

  async findSubscriptionByTenantId(tenantId: string) {
    return prisma.subscription.findFirst({
      where: {
        tenantId,
      },
    });
  }

  async findSubscriptionByStripeId(stripeSubscriptionId: string) {
    return prisma.subscription.findUnique({
      where: {
        stripeSubscriptionId,
      },
    });
  }

  async createSubscription(data: {
    tenantId: string;
    billingCustomerId: string;
    stripeSubscriptionId: string;
    stripePriceId?: string;
    stripeProductId?: string;
  }) {
    return prisma.subscription.create({
      data,
    });
  }

  async updateSubscriptionStatus(
    stripeSubscriptionId: string,
    status: string
  ) {
    return prisma.subscription.update({
      where: {
        stripeSubscriptionId,
      },
      data: {
        status:
          status.toUpperCase().replace("-", "_") as
            | "TRIALING"
            | "ACTIVE"
            | "PAST_DUE"
            | "CANCELED"
            | "UNPAID"
            | "INCOMPLETE"
            | "INCOMPLETE_EXPIRED"
            | "PAUSED",
      },
    });
  }

  async markBillingEventProcessed(
    stripeEventId: string,
    eventType: string
  ) {
    return prisma.billingEvent.upsert({
      where: {
        stripeEventId,
      },
      create: {
        stripeEventId,
        eventType,
        processed: true,
        processedAt: new Date(),
      },
      update: {
        processed: true,
        processedAt: new Date(),
      },
    });
  }
}