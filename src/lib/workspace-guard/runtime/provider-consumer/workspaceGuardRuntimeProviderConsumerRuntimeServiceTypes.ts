import type {
  WorkspaceGuardRuntimeProviderConsumerRuntime,
  WorkspaceGuardRuntimeProviderConsumerRuntimeInput,
  WorkspaceGuardRuntimeProviderConsumerRuntimeResult,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeTypes";

export type WorkspaceGuardRuntimeProviderConsumerRuntimeService = {
  execute(
    input: WorkspaceGuardRuntimeProviderConsumerRuntimeInput,
  ): WorkspaceGuardRuntimeProviderConsumerRuntimeResult;
};

export type WorkspaceGuardRuntimeProviderConsumerRuntimeServiceDependencies = {
  runtime: WorkspaceGuardRuntimeProviderConsumerRuntime;
};