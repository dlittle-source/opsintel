import type {
  WorkspaceGuardRuntimeProviderConsumerInput,
  WorkspaceGuardRuntimeProviderConsumerResult,
} from "./workspaceGuardRuntimeProviderConsumerTypes";

export interface WorkspaceGuardRuntimeProviderConsumerService {
  consume(
    input: WorkspaceGuardRuntimeProviderConsumerInput,
  ): Promise<WorkspaceGuardRuntimeProviderConsumerResult>;
}

export type WorkspaceGuardRuntimeProviderConsumerServiceInput =
  WorkspaceGuardRuntimeProviderConsumerInput;

export type WorkspaceGuardRuntimeProviderConsumerServiceResult =
  WorkspaceGuardRuntimeProviderConsumerResult;