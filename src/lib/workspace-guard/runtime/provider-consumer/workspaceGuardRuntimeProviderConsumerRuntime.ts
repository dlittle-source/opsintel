import type {
  WorkspaceGuardRuntimeProviderConsumerRuntime,
  WorkspaceGuardRuntimeProviderConsumerRuntimeInput,
  WorkspaceGuardRuntimeProviderConsumerRuntimeResult,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeTypes";

export function createWorkspaceGuardRuntimeProviderConsumerRuntime(): WorkspaceGuardRuntimeProviderConsumerRuntime {
  return {
    run(
      input: WorkspaceGuardRuntimeProviderConsumerRuntimeInput,
    ): WorkspaceGuardRuntimeProviderConsumerRuntimeResult {
      return {
        tenantId: input.tenantId,
        workspaceId: input.workspaceId,
        providerId: input.providerId,
        consumerId: input.consumerId,
        allowed: input.allowed,
        reason: input.reason,
        evaluatedAt: new Date().toISOString(),
      };
    },
  };
}