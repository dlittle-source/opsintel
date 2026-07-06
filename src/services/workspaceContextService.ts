import { currentTenantService } from "@/services/currentTenantService";
import { subscriptionContextService } from "@/services/subscriptionContextService";

export class WorkspaceContextService {
  async resolveWorkspaceContext(
    clerkOrgId?: string
  ) {
    const tenant =
      await currentTenantService.resolveTenant(
        clerkOrgId
      );

    if (!tenant) {
      return null;
    }

    const subscription =
      await subscriptionContextService.getTenantSubscription(
        tenant.id
      );

    return {
      tenant,
      subscription,
    };
  }
}

export const workspaceContextService =
  new WorkspaceContextService();