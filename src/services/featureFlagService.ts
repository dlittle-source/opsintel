import { runtimeEntitlementService } from "@/services/runtimeEntitlementService";

export class FeatureFlagService {
  async getFlags(clerkOrgId?: string) {
    const entitlements =
      await runtimeEntitlementService.resolveEntitlements(
        clerkOrgId
      );

    if (!entitlements) {
      return null;
    }

    return {
      aiCopilotEnabled: entitlements.aiCopilot,
      executiveWorkspaceEnabled:
        entitlements.executiveWorkspace,
      administrationWorkspaceEnabled:
        entitlements.administrationWorkspace,
      runtimeWorkspaceEnabled:
        entitlements.runtimeWorkspace,
    };
  }
}

export const featureFlagService =
  new FeatureFlagService();