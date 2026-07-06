export type WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceManagerInput =
  {
    tenantId: string;
    workspaceId: string;
    runtimeId: string;
    serviceManagerId: string;
  };

export type WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceManagerResult =
  {
    tenantId: string;
    workspaceId: string;
    runtimeId: string;
    serviceManagerId: string;
    managed: boolean;
    reason: string;
  };

export type WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceManager =
  {
    manageWorkspace: (
      input: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceManagerInput,
    ) => WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceManagerResult;
  };