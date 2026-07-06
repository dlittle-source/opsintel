import {
  createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManagerResolver,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManagerResolver";

import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManager,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManagerInput,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManagerResult,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManagerTypes";

export type WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManagerService =
  {
    manageRuntime: (
      input: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManagerInput,
    ) => WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManagerResult;
  };

export const createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManagerService =
  (): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManagerService => {
    const runtimeManager: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManager =
      createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManagerResolver();

    return {
      manageRuntime(input) {
        return runtimeManager.manageRuntime(input);
      },
    };
  };