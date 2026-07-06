import { createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorRegistryFactory } from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorRegistryFactory";

import { createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResolver } from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResolver";

import type { WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResolver } from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResolverTypes";

export const createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResolverFactory =
  (): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResolver =>
    createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResolver({
      registry:
        createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorRegistryFactory(),
    });