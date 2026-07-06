import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceManager,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceManagerInput,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceManagerResult,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceManagerTypes";

export const createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceManager =
  (): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceManager => {
    return {
      manageWorkspace(
        input: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceManagerInput,
      ): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceManagerResult {
        return {
          tenantId: input.tenantId,
          workspaceId: input.workspaceId,
          runtimeId: input.runtimeId,
          serviceManagerId: input.serviceManagerId,
          managed: true,
          reason:
            "Workspace guard runtime provider consumer runtime coordinator service manager runtime workspace manager completed successfully.",
        };
      },
    };
  };