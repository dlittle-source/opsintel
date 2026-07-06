import type {
  WorkspaceGuardRuntimeProviderConsumerRuntime,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeTypes";

import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeRegistry,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeRegistryTypes";

export function createWorkspaceGuardRuntimeProviderConsumerRuntimeRegistry(): WorkspaceGuardRuntimeProviderConsumerRuntimeRegistry {
  const registry: Record<
    string,
    WorkspaceGuardRuntimeProviderConsumerRuntime
  > = {};

  return {
    register(
      key: string,
      runtime: WorkspaceGuardRuntimeProviderConsumerRuntime,
    ): void {
      registry[key] = runtime;
    },

    get(
      key: string,
    ): WorkspaceGuardRuntimeProviderConsumerRuntime | undefined {
      return registry[key];
    },

    getAll(): Record<
      string,
      WorkspaceGuardRuntimeProviderConsumerRuntime
    > {
      return { ...registry };
    },
  };
}