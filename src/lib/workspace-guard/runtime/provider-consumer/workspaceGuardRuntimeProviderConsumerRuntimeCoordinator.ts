import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinator,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorDependencies,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorInput,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResult,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorTypes";

export const createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinator = (
  dependencies: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorDependencies,
): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinator => ({
  coordinate: (
    input: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorInput,
  ): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResult =>
    dependencies.manage(input),
});