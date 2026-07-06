import { createWorkspaceGuardRuntimeProviderConsumerRuntimeService } from "./workspaceGuardRuntimeProviderConsumerRuntimeService";

import type {
  WorkspaceGuardRuntimeProviderConsumerRuntimeService,
  WorkspaceGuardRuntimeProviderConsumerRuntimeServiceDependencies,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeServiceTypes";

export function createWorkspaceGuardRuntimeProviderConsumerRuntimeServiceFactory(
  dependencies: WorkspaceGuardRuntimeProviderConsumerRuntimeServiceDependencies,
): WorkspaceGuardRuntimeProviderConsumerRuntimeService {
  return createWorkspaceGuardRuntimeProviderConsumerRuntimeService(
    dependencies,
  );
}