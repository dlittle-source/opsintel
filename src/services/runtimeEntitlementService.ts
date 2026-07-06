import { runtimeIdentityService } from "@/services/runtimeIdentityService";

export class RuntimeEntitlementService {
  async resolveEntitlements(
    clerkOrgId?: string
  ) {
    const identity =
      await runtimeIdentityService.resolveIdentity(
        clerkOrgId
      );

    if (!identity) {
      return null;
    }

    return {
      tenantId: identity.tenantId,
      plan: identity.plan,
      executiveWorkspace: true,
      administrationWorkspace: true,
      runtimeWorkspace: true,
      aiCopilot: true,
    };
  }
}

export const runtimeEntitlementService =
  new RuntimeEntitlementService();