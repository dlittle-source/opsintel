import {
  DefaultWorkspaceGuardRuntimeProviderConsumer,
} from "./workspaceGuardRuntimeProviderConsumer";

import type {
  WorkspaceGuardRuntimeProviderConsumer,
} from "./workspaceGuardRuntimeProviderConsumerTypes";

export function createWorkspaceGuardRuntimeProviderConsumer(
  provider: WorkspaceGuardRuntimeProviderConsumer,
): DefaultWorkspaceGuardRuntimeProviderConsumer {
  return new DefaultWorkspaceGuardRuntimeProviderConsumer(provider);
}