import { createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceRegistryFactory } from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceRegistryFactory";

import { createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceResolver } from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceResolver";

import type { WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceResolver } from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceResolverTypes";

export const createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceResolverFactory =
  (): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceResolver =>
    createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceResolver({
      registry:
        createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceRegistryFactory(),
    });