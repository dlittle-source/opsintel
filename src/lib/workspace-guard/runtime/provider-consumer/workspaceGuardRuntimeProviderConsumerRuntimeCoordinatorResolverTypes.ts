import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorRegistry,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorRegistryTypes";

import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorInput,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResult,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorTypes";

export type WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResolver = {
  resolve(
    input: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorInput,
  ): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResult;
};

export type WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResolverDependencies =
  {
    registry: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorRegistry;
  };