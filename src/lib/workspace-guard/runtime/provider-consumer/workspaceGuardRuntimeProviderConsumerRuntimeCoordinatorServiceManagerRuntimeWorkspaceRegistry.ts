export type WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceRegistryEntry =
  {
    workspaceId: string;
    tenantId: string;
    runtimeId: string;
    coordinatorId: string;
    serviceManagerId: string;
  };

export class WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceRegistry {
  private readonly entries = new Map<
    string,
    WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceRegistryEntry
  >();

  register(
    entry: WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceRegistryEntry,
  ): void {
    this.entries.set(entry.workspaceId, entry);
  }

  get(
    workspaceId: string,
  ):
    | WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceRegistryEntry
    | undefined {
    return this.entries.get(workspaceId);
  }

  getAll(): WorkspaceGuardRuntimeProviderConsumerRuntimeCoordinatorServiceManagerRuntimeWorkspaceRegistryEntry[] {
    return [...this.entries.values()];
  }
}