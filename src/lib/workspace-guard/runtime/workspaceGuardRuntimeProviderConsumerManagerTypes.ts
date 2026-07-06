import type {
  WorkspaceGuardRuntimeProviderConsumerServiceInput,
  WorkspaceGuardRuntimeProviderConsumerServiceResult,
} from "./workspaceGuardRuntimeProviderConsumerServiceTypes";

export interface WorkspaceGuardRuntimeProviderConsumerManager {
  consume(
    input: WorkspaceGuardRuntimeProviderConsumerServiceInput,
  ): Promise<WorkspaceGuardRuntimeProviderConsumerServiceResult>;
}

export type WorkspaceGuardRuntimeProviderConsumerManagerInput =
  WorkspaceGuardRuntimeProviderConsumerServiceInput;

export type WorkspaceGuardRuntimeProviderConsumerManagerResult =
  WorkspaceGuardRuntimeProviderConsumerServiceResult;