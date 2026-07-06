import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRegistry,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRegistryTypes";

import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorInput,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResult,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorTypes";

export type WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerResolver =
  {
    resolve(
      input: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorInput,
    ): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResult;
  };

export type WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerResolverDependencies =
  {
    registry: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRegistry;
  };