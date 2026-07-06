import { runtimeEntitlementService } from "@/services/runtimeEntitlementService";

export class WorkspaceAccessService {
  async canAccessExecutiveWorkspace(
    clerkOrgId?: string
  ) {
    const entitlements =
      await runtimeEntitlementService.resolveEntitlements(
        clerkOrgId
      );

    return entitlements?.executiveWorkspace ?? false;
  }

  async canAccessAdministrationWorkspace(
    clerkOrgId?: string
  ) {
    const entitlements =
      await runtimeEntitlementService.resolveEntitlements(
        clerkOrgId
      );

    return entitlements?.administrationWorkspace ?? false;
  }

  async canAccessRuntimeWorkspace(
    clerkOrgId?: string
  ) {
    const entitlements =
      await runtimeEntitlementService.resolveEntitlements(
        clerkOrgId
      );

    return entitlements?.runtimeWorkspace ?? false;
  }
}

export const workspaceAccessService =
  new WorkspaceAccessService();