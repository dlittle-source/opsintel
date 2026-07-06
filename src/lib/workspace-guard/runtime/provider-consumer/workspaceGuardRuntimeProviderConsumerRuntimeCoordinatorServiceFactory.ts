import { createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResolverFactory } from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResolverFactory";

import { createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorService } from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorService";

import type { WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorService } from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceTypes";

export const createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceFactory =
  (): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorService =>
    createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorService({
      coordinate:
        createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorResolverFactory()
          .resolve,
    });