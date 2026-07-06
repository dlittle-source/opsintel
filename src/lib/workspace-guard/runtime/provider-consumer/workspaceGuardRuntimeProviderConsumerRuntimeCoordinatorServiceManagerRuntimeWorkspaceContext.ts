import {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceRegistryEntry,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceRegistry";
import {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceDispatcher,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceDispatcher";

export class WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceContext {
  constructor(
    private readonly dispatcher: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceDispatcher,
  ) {}

  getContext(
    workspaceId: string,
  ): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceRegistryEntry | undefined {
    return this.dispatcher.dispatch(workspaceId);
  }
}