import type {
  WorkspaceGuardRuntimeProviderConsumerOrchestratorInput,
  WorkspaceGuardRuntimeProviderConsumerOrchestratorResult,
} from "./workspaceGuardRuntimeProviderConsumerOrchestratorTypes";

export interface WorkspaceGuardRuntimeProviderConsumerEngine {
  consume(
    input: WorkspaceGuardRuntimeProviderConsumerOrchestratorInput,
  ): Promise<WorkspaceGuardRuntimeProviderConsumerOrchestratorResult>;
}

export type WorkspaceGuardRuntimeProviderConsumerEngineInput =
  WorkspaceGuardRuntimeProviderConsumerOrchestratorInput;

export type WorkspaceGuardRuntimeProviderConsumerEngineResult =
  WorkspaceGuardRuntimeProviderConsumerOrchestratorResult;