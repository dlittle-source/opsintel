import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResolver,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResolverDependencies,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResolverTypes";

import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorInput,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResult,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorTypes";

export const createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResolver =
  (
    dependencies: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResolverDependencies,
  ): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResolver => ({
    resolve: (
      input: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorInput,
    ): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResult =>
      dependencies.registry.coordinator.coordinate(input),
  });