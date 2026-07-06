import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeInput,
  WorkspaceGuardRuntimeProviderConsumerRuntimeResult,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeTypes";

export type WorkspaceGuardRuntimeProviderConsumerRuntimeManager = {
  manage(
    input: WorkspaceGuardRuntimeProviderConsumerRuntimeInput,
  ): WorkspaceGuardRuntimeProviderConsumerRuntimeResult;
};

export type WorkspaceGuardRuntimeProviderConsumerRuntimeManagerDependencies = {
  execute(
    input: WorkspaceGuardRuntimeProviderConsumerRuntimeInput,
  ): WorkspaceGuardRuntimeProviderConsumerRuntimeResult;
};