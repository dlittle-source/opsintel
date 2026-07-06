import { createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorFactory } from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorFactory";

import { createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorRegistry } from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorRegistry";

import type { WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorRegistry } from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorRegistryTypes";

export const createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorRegistryFactory =
  (): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorRegistry =>
    createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorRegistry({
      coordinator:
        createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorFactory(),
    });