import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeInput,
  WorkspaceGuardRuntimeProviderConsumerRuntimeResult,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeTypes";

import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeManager,
  WorkspaceGuardRuntimeProviderConsumerRuntimeManagerDependencies,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeManagerTypes";

export function createWorkspaceGuardRuntimeProviderConsumerRuntimeManager(
  dependencies: WorkspaceGuardRuntimeProviderConsumerRuntimeManagerDependencies,
): WorkspaceGuardRuntimeProviderConsumerRuntimeManager {
  return {
    manage(
      input: WorkspaceGuardRuntimeProviderConsumerRuntimeInput,
    ): WorkspaceGuardRuntimeProviderConsumerRuntimeResult {
      return dependencies.execute(input);
    },
  };
}