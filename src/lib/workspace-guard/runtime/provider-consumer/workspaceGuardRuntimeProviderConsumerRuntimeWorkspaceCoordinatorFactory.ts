import { WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinator } from "./workspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinator";

export class WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorFactory {
  static create(): WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinator {
    return new WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinator();
  }
}