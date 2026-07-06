import { createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceFactory } from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceFactory";

import { createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceRegistry } from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceRegistry";

import type { WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceRegistry } from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceRegistryTypes";

export const createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceRegistryFactory =
  (): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceRegistry =>
    createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceRegistry({
      service:
        createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceFactory(),
    });