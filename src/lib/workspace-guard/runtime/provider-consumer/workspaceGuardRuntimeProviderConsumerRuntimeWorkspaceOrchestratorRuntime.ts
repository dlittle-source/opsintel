import {
  WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorInput,
  WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorResult,
} from "./workspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestrator";
import { WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorService } from "./workspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorService";

export class WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorRuntime {
  constructor(
    private readonly service: WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorService,
  ) {}

  orchestrate(
    input: WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorInput,
  ): WorkspaceGuardRuntimeProviderConsumerRuntimeWorkspaceOrchestratorResult {
    return this.service.orchestrate(input);
  }
}