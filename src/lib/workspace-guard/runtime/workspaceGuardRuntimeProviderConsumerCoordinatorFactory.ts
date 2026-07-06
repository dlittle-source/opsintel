import { DefaultWorkspaceGuardRuntimeProviderConsumerCoordinator } from "./workspaceGuardRuntimeProviderConsumerCoordinator";

import type {
  WorkspaceGuardRuntimeProviderConsumerManager,
} from "./workspaceGuardRuntimeProviderConsumerManagerTypes";

export function createWorkspaceGuardRuntimeProviderConsumerCoordinator(
  manager: WorkspaceGuardRuntimeProviderConsumerManager,
): DefaultWorkspaceGuardRuntimeProviderConsumerCoordinator {
  return new DefaultWorkspaceGuardRuntimeProviderConsumerCoordinator(
    manager,
  );
}