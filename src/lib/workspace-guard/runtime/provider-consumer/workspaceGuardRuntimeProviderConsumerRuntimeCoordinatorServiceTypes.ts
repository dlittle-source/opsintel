import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorInput,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResult,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorTypes";

export type WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorService = {
  serve(
    input: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorInput,
  ): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResult;
};

export type WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceDependencies =
  {
    coordinate(
      input: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorInput,
    ): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResult;
  };