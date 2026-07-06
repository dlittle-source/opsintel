import { SubscriptionService } from "@/services/subscriptionService";

export class BillingEntitlementService {
  private subscriptionService = new SubscriptionService();

  async hasActiveSubscription(
    tenantId: string
  ): Promise<boolean> {
    const subscription =
      await this.subscriptionService.getSubscription(
        tenantId
      );

    if (!subscription) {
      return false;
    }

    return [
      "ACTIVE",
      "TRIALING",
    ].includes(subscription.status);
  }

  async getSubscriptionStatus(
    tenantId: string
  ) {
    const subscription =
      await this.subscriptionService.getSubscription(
        tenantId
      );

    return subscription?.status ?? null;
  }
}