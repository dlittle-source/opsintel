import type {
  WorkspaceGuardRuntimeProviderConsumerCoordinatorInput,
  WorkspaceGuardRuntimeProviderConsumerCoordinatorResult,
} from "./workspaceGuardRuntimeProviderConsumerCoordinatorTypes";

export interface WorkspaceGuardRuntimeProviderConsumerOrchestrator {
  consume(
    input: WorkspaceGuardRuntimeProviderConsumerCoordinatorInput,
  ): Promise<WorkspaceGuardRuntimeProviderConsumerCoordinatorResult>;
}

export type WorkspaceGuardRuntimeProviderConsumerOrchestratorInput =
  WorkspaceGuardRuntimeProviderConsumerCoordinatorInput;

export type WorkspaceGuardRuntimeProviderConsumerOrchestratorResult =
  WorkspaceGuardRuntimeProviderConsumerCoordinatorResult;