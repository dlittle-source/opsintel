import type {
  WorkspaceGuardRuntimeProviderConsumerOrchestrator,
  WorkspaceGuardRuntimeProviderConsumerOrchestratorInput,
  WorkspaceGuardRuntimeProviderConsumerOrchestratorResult,
} from "./workspaceGuardRuntimeProviderConsumerOrchestratorTypes";

import type {
  WorkspaceGuardRuntimeProviderConsumerCoordinator,
} from "./workspaceGuardRuntimeProviderConsumerCoordinatorTypes";

export class DefaultWorkspaceGuardRuntimeProviderConsumerOrchestrator
  implements WorkspaceGuardRuntimeProviderConsumerOrchestrator
{
  constructor(
    private readonly coordinator: WorkspaceGuardRuntimeProviderConsumerCoordinator,
  ) {}

  async consume(
    input: WorkspaceGuardRuntimeProviderConsumerOrchestratorInput,
  ): Promise<WorkspaceGuardRuntimeProviderConsumerOrchestratorResult> {
    return this.coordinator.consume(input);
  }
}