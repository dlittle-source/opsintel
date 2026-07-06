import type {
  WorkspaceGuardRuntimeProviderConsumerManagerInput,
  WorkspaceGuardRuntimeProviderConsumerManagerResult,
} from "./workspaceGuardRuntimeProviderConsumerManagerTypes";

export interface WorkspaceGuardRuntimeProviderConsumerCoordinator {
  consume(
    input: WorkspaceGuardRuntimeProviderConsumerManagerInput,
  ): Promise<WorkspaceGuardRuntimeProviderConsumerManagerResult>;
}

export type WorkspaceGuardRuntimeProviderConsumerCoordinatorInput =
  WorkspaceGuardRuntimeProviderConsumerManagerInput;

export type WorkspaceGuardRuntimeProviderConsumerCoordinatorResult =
  WorkspaceGuardRuntimeProviderConsumerManagerResult;