import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeInput,
  WorkspaceGuardRuntimeProviderConsumerRuntimeResult,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeTypes";

export type WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorInput =
  WorkspaceGuardRuntimeProviderConsumerRuntimeInput;

export type WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResult =
  WorkspaceGuardRuntimeProviderConsumerRuntimeResult;

export type WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinator = {
  coordinate(
    input: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorInput,
  ): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResult;
};

export type WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorDependencies =
  {
    manage(
      input: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorInput,
    ): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResult;
  };