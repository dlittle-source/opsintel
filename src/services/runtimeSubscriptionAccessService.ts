import { BillingEntitlementService } from "@/services/billingEntitlementService";

export class RuntimeSubscriptionAccessService {
  private billingEntitlementService =
    new BillingEntitlementService();

  async canAccessPlatform(
    tenantId: string
  ): Promise<boolean> {
    return this.billingEntitlementService.hasActiveSubscription(
      tenantId
    );
  }

  async getSubscriptionStatus(
    tenantId: string
  ) {
    return this.billingEntitlementService.getSubscriptionStatus(
      tenantId
    );
  }
}