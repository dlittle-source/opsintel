import {
  createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceManager,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceManager";

import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceManager,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceManagerTypes";

export type WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceManagerRegistry =
  {
    runtimeWorkspaceManager: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceManager;
  };

export const createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceManagerRegistry =
  (): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceManagerRegistry => {
    return {
      runtimeWorkspaceManager:
        createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceManager(),
    };
  };