import { subscriptionRepository } from "@/repositories/subscriptionRepository";

export class SubscriptionContextService {
  async getTenantSubscription(tenantId: string) {
    return subscriptionRepository.findTenantPlan(
      tenantId
    );
  }

  async updateTenantPlan(
    tenantId: string,
    plan:
      | "STARTER"
      | "PROFESSIONAL"
      | "ENTERPRISE"
      | "WHITE_LABEL"
  ) {
    return subscriptionRepository.updatePlan(
      tenantId,
      plan
    );
  }
}

export const subscriptionContextService =
  new SubscriptionContextService();