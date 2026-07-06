import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeService,
  WorkspaceGuardRuntimeProviderConsumerRuntimeServiceDependencies,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeServiceTypes";

export function createWorkspaceGuardRuntimeProviderConsumerRuntimeService(
  dependencies: WorkspaceGuardRuntimeProviderConsumerRuntimeServiceDependencies,
): WorkspaceGuardRuntimeProviderConsumerRuntimeService {
  return {
    execute(input) {
      return dependencies.runtime.run(input);
    },
  };
}