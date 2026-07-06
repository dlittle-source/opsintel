import { DefaultWorkspaceGuardRuntimeProviderConsumerOrchestrator } from "./workspaceGuardRuntimeProviderConsumerOrchestrator";

import type {
  WorkspaceGuardRuntimeProviderConsumerCoordinator,
} from "./workspaceGuardRuntimeProviderConsumerCoordinatorTypes";

export function createWorkspaceGuardRuntimeProviderConsumerOrchestrator(
  coordinator: WorkspaceGuardRuntimeProviderConsumerCoordinator,
): DefaultWorkspaceGuardRuntimeProviderConsumerOrchestrator {
  return new DefaultWorkspaceGuardRuntimeProviderConsumerOrchestrator(
    coordinator,
  );
}