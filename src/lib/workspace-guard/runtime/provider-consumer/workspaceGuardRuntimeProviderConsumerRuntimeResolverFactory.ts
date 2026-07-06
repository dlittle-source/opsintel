import { createWorkspaceGuardRuntimeProviderConsumerRuntimeResolver } from "./workspaceGuardRuntimeProviderConsumerRuntimeResolver";

import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeRegistry,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeRegistryTypes";

import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeResolver,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeResolverTypes";

export function createWorkspaceGuardRuntimeProviderConsumerRuntimeResolverFactory(
  registry: WorkspaceGuardRuntimeProviderConsumerRuntimeRegistry,
): WorkspaceGuardRuntimeProviderConsumerRuntimeResolver {
  return createWorkspaceGuardRuntimeProviderConsumerRuntimeResolver(
    registry,
  );
}