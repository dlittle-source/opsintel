import { DefaultWorkspaceGuardRuntimeProviderConsumerManager } from "./workspaceGuardRuntimeProviderConsumerManager";

import type { WorkspaceGuardRuntimeProviderConsumerService } from "./workspaceGuardRuntimeProviderConsumerServiceTypes";

export function createWorkspaceGuardRuntimeProviderConsumerManager(
  service: WorkspaceGuardRuntimeProviderConsumerService,
): DefaultWorkspaceGuardRuntimeProviderConsumerManager {
  return new DefaultWorkspaceGuardRuntimeProviderConsumerManager(
    service,
  );
}