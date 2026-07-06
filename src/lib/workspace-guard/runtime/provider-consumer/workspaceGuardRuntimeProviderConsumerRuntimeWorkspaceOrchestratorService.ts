import {
  WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestrator,
  WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorInput,
  WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorResult,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestrator";
import { WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorRegistry } from "./workspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorRegistry";

export class WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorService {
  constructor(
    private readonly registry: WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorRegistry,
  ) {}

  orchestrate(
    input: WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorInput,
  ): WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorResult {
    let orchestrator = this.registry.resolve(input.workspaceId);

    if (!orchestrator) {
      orchestrator =
        new WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestrator();

      this.registry.register(input.workspaceId, orchestrator);
    }

    return orchestrator.orchestrate(input);
  }
}