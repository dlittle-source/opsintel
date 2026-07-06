import type {
  WorkspaceGuardRuntimeProviderConsumerEngine,
  WorkspaceGuardRuntimeProviderConsumerEngineInput,
  WorkspaceGuardRuntimeProviderConsumerEngineResult,
} from "./workspaceGuardRuntimeProviderConsumerEngineTypes";

import type {
  WorkspaceGuardRuntimeProviderConsumerOrchestrator,
} from "./workspaceGuardRuntimeProviderConsumerOrchestratorTypes";

export class DefaultWorkspaceGuardRuntimeProviderConsumerEngine
  implements WorkspaceGuardRuntimeProviderConsumerEngine
{
  constructor(
    private readonly orchestrator: WorkspaceGuardRuntimeProviderConsumerOrchestrator,
  ) {}

  async consume(
    input: WorkspaceGuardRuntimeProviderConsumerEngineInput,
  ): Promise<WorkspaceGuardRuntimeProviderConsumerEngineResult> {
    return this.orchestrator.consume(input);
  }
}