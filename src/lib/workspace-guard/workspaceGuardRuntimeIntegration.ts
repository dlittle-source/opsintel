import { WorkspaceGuardRuntimeFactory } from "./workspaceGuardRuntimeFactory";

import type {
  WorkspaceGuardRuntimeIntegration,
} from "./workspaceGuardRuntimeIntegrationTypes";

import type {
  WorkspaceGuardRuntimeEvaluation,
} from "./workspaceGuardRuntimeEvaluationTypes";

export class DefaultWorkspaceGuardRuntimeIntegration
  implements WorkspaceGuardRuntimeIntegration
{
  private readonly runtime =
    WorkspaceGuardRuntimeFactory.create();

  async evaluate(
    pathname: string
  ): Promise<WorkspaceGuardRuntimeEvaluation> {
    return this.runtime.evaluate(pathname);
  }
}