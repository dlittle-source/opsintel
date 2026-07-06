import { WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorRegistryFactory } from "./workspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorRegistryFactory";
import { WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorRuntime } from "./workspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorRuntime";
import { WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorService } from "./workspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorService";

export class WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorRuntimeFactory {
  static create(): WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorRuntime {
    const registry =
      WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorRegistryFactory.create();

    const service =
      new WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorService(
        registry,
      );

    return new WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorRuntime(
      service,
    );
  }
}