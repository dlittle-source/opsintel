export type WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManagerInput = {
  tenantId: string;
  workspaceId: string;
  runtimeId: string;
  serviceManagerId: string;
};

export type WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManagerResult = {
  tenantId: string;
  workspaceId: string;
  runtimeId: string;
  serviceManagerId: string;
  managed: boolean;
  reason: string;
};

export type WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManager = {
  manageRuntime: (
    input: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManagerInput,
  ) => WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeManagerResult;
};