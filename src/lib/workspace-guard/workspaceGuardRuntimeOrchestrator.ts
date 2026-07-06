import { WorkspaceGuardRuntimeCoordinatorFactory } from "./workspaceGuardRuntimeCoordinatorFactory";

import type {
  WorkspaceGuardRuntimeOrchestrator,
} from "./workspaceGuardRuntimeOrchestratorTypes";

import type {
  WorkspaceGuardRuntimeEvaluation,
} from "./workspaceGuardRuntimeEvaluationTypes";

export class DefaultWorkspaceGuardRuntimeOrchestrator
  implements WorkspaceGuardRuntimeOrchestrator
{
  private readonly coordinator =
    WorkspaceGuardRuntimeCoordinatorFactory.create();

  async evaluate(
    pathname: string
  ): Promise<WorkspaceGuardRuntimeEvaluation> {
    return this.coordinator.evaluate(pathname);
  }
}