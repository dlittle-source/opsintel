import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeResolver,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeResolverDependencies,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeResolverTypes";

export function createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeResolver(
  dependencies: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeResolverDependencies,
): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeResolver {
  return {
    resolve(input) {
      return dependencies.registry.runtime.manager.manage(input);
    },
  };
}