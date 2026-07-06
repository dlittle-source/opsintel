import type {
  WorkspaceGuardRuntimeProviderConsumerEngineInput,
  WorkspaceGuardRuntimeProviderConsumerEngineResult,
} from "./workspaceGuardRuntimeProviderConsumerEngineTypes";

export interface WorkspaceGuardRuntimeProviderConsumerRuntime {
  consume(
    input: WorkspaceGuardRuntimeProviderConsumerEngineInput,
  ): Promise<WorkspaceGuardRuntimeProviderConsumerEngineResult>;
}

export type WorkspaceGuardRuntimeProviderConsumerRuntimeInput =
  WorkspaceGuardRuntimeProviderConsumerEngineInput;

export type WorkspaceGuardRuntimeProviderConsumerRuntimeResult =
  WorkspaceGuardRuntimeProviderConsumerEngineResult;