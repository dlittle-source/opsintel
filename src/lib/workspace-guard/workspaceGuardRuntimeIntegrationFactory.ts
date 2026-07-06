import { DefaultWorkspaceGuardRuntimeIntegration } from "./workspaceGuardRuntimeIntegration";

import type { WorkspaceGuardRuntimeIntegration } from "./workspaceGuardRuntimeIntegrationTypes";

export class WorkspaceGuardRuntimeIntegrationFactory {
  static create(): WorkspaceGuardRuntimeIntegration {
    return new DefaultWorkspaceGuardRuntimeIntegration();
  }
}