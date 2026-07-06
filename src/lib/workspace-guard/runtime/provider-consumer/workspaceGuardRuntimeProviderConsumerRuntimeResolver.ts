import type {
  WorkspaceGuardRuntimeProviderConsumerRuntime,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeTypes";

import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeRegistry,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeRegistryTypes";

import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeResolver,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeResolverTypes";

export function createWorkspaceGuardRuntimeProviderConsumerRuntimeResolver(
  registry: WorkspaceGuardRuntimeProviderConsumerRuntimeRegistry,
): WorkspaceGuardRuntimeProviderConsumerRuntimeResolver {
  return {
    resolve(
      key: string,
    ): WorkspaceGuardRuntimeProviderConsumerRuntime | undefined {
      return registry.get(key);
    },
  };
}