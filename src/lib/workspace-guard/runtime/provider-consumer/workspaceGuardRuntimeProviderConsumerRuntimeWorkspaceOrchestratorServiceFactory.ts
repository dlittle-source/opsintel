import { WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorRegistryFactory } from "./workspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorRegistryFactory";
import { WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorService } from "./workspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorService";

export class WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorServiceFactory {
  static create(): WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorService {
    const registry =
      WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorRegistryFactory.create();

    return new WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorService(
      registry,
    );
  }
}