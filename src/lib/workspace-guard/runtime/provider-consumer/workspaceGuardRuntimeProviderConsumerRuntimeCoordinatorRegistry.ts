import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorRegistry,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorRegistryDependencies,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorRegistryTypes";

export const createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorRegistry =
  (
    dependencies: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorRegistryDependencies,
  ): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorRegistry => ({
    coordinator: dependencies.coordinator,
  });