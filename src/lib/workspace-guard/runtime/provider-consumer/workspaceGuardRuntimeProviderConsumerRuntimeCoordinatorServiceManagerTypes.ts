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
    resolve(
      input: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorInput,
    ): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResult;
  };