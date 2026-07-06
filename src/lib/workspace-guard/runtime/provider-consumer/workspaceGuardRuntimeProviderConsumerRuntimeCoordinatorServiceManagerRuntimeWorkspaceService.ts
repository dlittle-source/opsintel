import {
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceRegistry,
  WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceRegistryEntry,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceRegistry";
import {
  resolveWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspace,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceResolver";

export class WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceService {
  constructor(
    private readonly registry: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceRegistry,
  ) {}

  resolve(
    workspaceId: string,
  ): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceRegistryEntry | undefined {
    return resolveWorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspace(
      this.registry,
      { workspaceId },
    );
  }
}