import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceResolver,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceResolverTypes";

import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorInput,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResult,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorTypes";

export type WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManager =
  {
    manage(
      input: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorInput,
    ): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResult;
  };

export type WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerDependencies =
  {
    resolver: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceResolver;
  };

export function createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManager(
  dependencies: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerDependencies,
): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManager {
  return {
    manage(input) {
      return dependencies.resolver.resolve(input);
    },
  };
}