import { createWorkspaceGuardRuntimeProviderConsumerRuntimeManager } from "./workspaceGuardRuntimeProviderConsumerRuntimeManager";

import { createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinator } from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinator";

import type { WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinator } from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorTypes";

export const createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorFactory =
  (): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinator =>
    createWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinator({
      manage: createWorkspaceGuardRuntimeProviderConsumerRuntimeManager({
        execute: (input) => ({
          ...input,
          evaluatedAt: new Date().toISOString(),
        }),
      }).manage,
    });