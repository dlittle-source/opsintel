import { WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestrator } from "./workspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestrator";

export class WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorRegistry {
  private readonly orchestrators = new Map<
    string,
    WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestrator
  >();

  register(
    workspaceId: string,
    orchestrator: WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestrator,
  ): void {
    this.orchestrators.set(workspaceId, orchestrator);
  }

  resolve(
    workspaceId: string,
  ):
    | WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestrator
    | undefined {
    return this.orchestrators.get(workspaceId);
  }

  unregister(workspaceId: string): boolean {
    return this.orchestrators.delete(workspaceId);
  }

  has(workspaceId: string): boolean {
    return this.orchestrators.has(workspaceId);
  }

  list(): WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestrator[] {
    return [...this.orchestrators.values()];
  }

  clear(): void {
    this.orchestrators.clear();
  }
}