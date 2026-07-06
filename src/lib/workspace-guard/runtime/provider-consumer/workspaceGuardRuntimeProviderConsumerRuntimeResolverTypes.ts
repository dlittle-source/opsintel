import type {
  WorkspaceGuardRuntimeProviderConsumerRuntime,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeTypes";

export type WorkspaceGuardRuntimeProviderConsumerRuntimeResolver = {
  resolve(
    key: string,
  ): WorkspaceGuardRuntimeProviderConsumerRuntime | undefined;
};