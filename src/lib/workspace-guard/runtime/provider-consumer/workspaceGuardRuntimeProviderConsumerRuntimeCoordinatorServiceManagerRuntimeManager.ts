import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManager,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManagerInput,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManagerResult,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManagerTypes";

export const createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManager =
  (): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManager => {
    return {
      manageRuntime(
        input: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManagerInput,
      ): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManagerResult {
        return {
          tenantId: input.tenantId,
          workspaceId: input.workspaceId,
          runtimeId: input.runtimeId,
          serviceManagerId: input.serviceManagerId,
          managed: true,
          reason: "Workspace guard runtime provider consumer runtime coordinator service manager runtime manager completed successfully.",
        };
      },
    };
  };