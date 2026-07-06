export type WorkspaceGuardRuntimeProviderConsumerRuntimeInput = {
  tenantId: string;
  workspaceId: string;
  providerId: string;
  consumerId: string;
  allowed: boolean;
  reason: string;
};

export type WorkspaceGuardRuntimeProviderConsumerRuntimeResult = {
  tenantId: string;
  workspaceId: string;
  providerId: string;
  consumerId: string;
  allowed: boolean;
  reason: string;
  evaluatedAt: string;
};

export type WorkspaceGuardRuntimeProviderConsumerRuntime = {
  run(
    input: WorkspaceGuardRuntimeProviderConsumerRuntimeInput,
  ): WorkspaceGuardRuntimeProviderConsumerRuntimeResult;
};