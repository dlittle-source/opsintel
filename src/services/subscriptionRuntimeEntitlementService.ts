import { RuntimeSubscriptionAccessService } from "@/services/runtimeSubscriptionAccessService";

export class SubscriptionRuntimeEntitlementService {
  private runtimeSubscriptionAccessService =
    new RuntimeSubscriptionAccessService();

  async isTenantEntitled(
    tenantId: string
  ): Promise<boolean> {
    return this.runtimeSubscriptionAccessService.canAccessPlatform(
      tenantId
    );
  }

  async getTenantSubscriptionStatus(
    tenantId: string
  ) {
    return this.runtimeSubscriptionAccessService.getSubscriptionStatus(
      tenantId
    );
  }
}