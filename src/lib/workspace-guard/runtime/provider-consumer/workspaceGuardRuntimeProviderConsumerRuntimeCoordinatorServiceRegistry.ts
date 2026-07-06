import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceRegistry,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceRegistryDependencies,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceRegistryTypes";

export const createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceRegistry =
  (
    dependencies: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceRegistryDependencies,
  ): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceRegistry => ({
    service: dependencies.service,
  });