import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorService,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceDependencies,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceTypes";

import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorInput,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResult,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorTypes";

export const createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorService =
  (
    dependencies: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceDependencies,
  ): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorService => ({
    serve: (
      input: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorInput,
    ): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResult =>
      dependencies.coordinate(input),
  });