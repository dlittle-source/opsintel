import type { ProtectedWorkspaceContext } from "./protectedWorkspaceContext";
import type { ProtectedWorkspaceContextResult } from "./protectedWorkspaceContextResult";

export class ProtectedWorkspaceContextService {
  create(
    pathname: string,
    workspaceId: string,
    tenantId: string,
    organizationId?: string
  ): ProtectedWorkspaceContextResult {
    return {
      context: {
        pathname,
        workspaceId,
        tenantId,
        organizationId,
      },
      isValid: true,
    };
  }
}