import type {
  WorkspaceGuardRuntimeProviderConsumerRuntime,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeTypes";

export type WorkspaceGuardRuntimeProviderConsumerRuntimeRegistry = {
  register(
    key: string,
    runtime: WorkspaceGuardRuntimeProviderConsumerRuntime,
  ): void;

  get(
    key: string,
  ): WorkspaceGuardRuntimeProviderConsumerRuntime | undefined;

  getAll(): Record<
    string,
    WorkspaceGuardRuntimeProviderConsumerRuntime
  >;
};