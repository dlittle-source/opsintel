import { DefaultWorkspaceGuardRuntimeProviderConsumerRegistry } from "./workspaceGuardRuntimeProviderConsumerRegistry";

import type {
  WorkspaceGuardRuntimeProviderConsumerRegistryOptions,
} from "./workspaceGuardRuntimeProviderConsumerRegistryTypes";

export function createWorkspaceGuardRuntimeProviderConsumerRegistry(
  options: WorkspaceGuardRuntimeProviderConsumerRegistryOptions = {},
): DefaultWorkspaceGuardRuntimeProviderConsumerRegistry {
  return new DefaultWorkspaceGuardRuntimeProviderConsumerRegistry(options);
}