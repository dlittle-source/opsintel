import { WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinator } from "./workspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinator";

export class WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinatorRegistry {
  private readonly coordinators = new Map<
    string,
    WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinator
  >();

  register(
    workspaceId: string,
    coordinator: WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinator,
  ): void {
    this.coordinators.set(workspaceId, coordinator);
  }

  resolve(
    workspaceId: string,
  ):
    | WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinator
    | undefined {
    return this.coordinators.get(workspaceId);
  }

  unregister(workspaceId: string): boolean {
    return this.coordinators.delete(workspaceId);
  }

  has(workspaceId: string): boolean {
    return this.coordinators.has(workspaceId);
  }

  list(): WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceCoordinator[] {
    return [...this.coordinators.values()];
  }

  clear(): void {
    this.coordinators.clear();
  }
}