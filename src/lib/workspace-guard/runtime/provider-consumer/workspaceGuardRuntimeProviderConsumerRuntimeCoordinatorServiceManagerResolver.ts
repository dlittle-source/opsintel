import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerResolver,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerResolverDependencies,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerResolverTypes";

export function createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerResolver(
  dependencies: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerResolverDependencies,
): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerResolver {
  return {
    resolve(input) {
      return dependencies.registry.manager.manage(input);
    },
  };
}