import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceRegistry,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceRegistryTypes";

import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorInput,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResult,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorTypes";

export type WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceResolver =
  {
    resolve(
      input: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorInput,
    ): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResult;
  };

export type WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceResolverDependencies =
  {
    registry: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceRegistry;
  };