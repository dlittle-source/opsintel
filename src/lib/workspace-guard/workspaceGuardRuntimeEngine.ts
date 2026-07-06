import { WorkspaceGuardRuntimeOrchestratorFactory } from "./workspaceGuardRuntimeOrchestratorFactory";

import type {
  WorkspaceGuardRuntimeEngine,
} from "./workspaceGuardRuntimeEngineTypes";

import type {
  WorkspaceGuardRuntimeEvaluation,
} from "./workspaceGuardRuntimeEvaluationTypes";

export class DefaultWorkspaceGuardRuntimeEngine
  implements WorkspaceGuardRuntimeEngine
{
  private readonly orchestrator =
    WorkspaceGuardRuntimeOrchestratorFactory.create();

  async evaluate(
    pathname: string
  ): Promise<WorkspaceGuardRuntimeEvaluation> {
    return this.orchestrator.evaluate(pathname);
  }
}