import { workspaceContextService } from "@/services/workspaceContextService";

export class RuntimeIdentityService {
  async resolveIdentity(clerkOrgId?: string) {
    const workspace =
      await workspaceContextService.resolveWorkspaceContext(
        clerkOrgId
      );

    if (!workspace) {
      return null;
    }

    return {
      tenantId: workspace.tenant.id,
      tenantName: workspace.tenant.name,
      tenantSlug: workspace.tenant.slug,
      plan: workspace.subscription?.plan,
      status: workspace.subscription?.status,
    };
  }
}

export const runtimeIdentityService =
  new RuntimeIdentityService();