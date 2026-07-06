import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceResolver,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceResolverDependencies,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceResolverTypes";

import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorInput,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResult,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorTypes";

export const createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceResolver =
  (
    dependencies: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceResolverDependencies,
  ): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceResolver => ({
    resolve: (
      input: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorInput,
    ): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResult =>
      dependencies.registry.service.serve(input),
  });