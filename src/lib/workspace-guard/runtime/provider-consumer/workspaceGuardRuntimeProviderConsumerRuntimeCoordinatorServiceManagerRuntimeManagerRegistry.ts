import {
  createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManager,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManager";

import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManager,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManagerTypes";

export type WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManagerRegistry =
  {
    runtimeManager: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManager;
  };

export const createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManagerRegistry =
  (): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManagerRegistry => {
    return {
      runtimeManager:
        createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManager(),
    };
  };