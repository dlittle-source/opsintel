import { WorkspaceGuardRuntimeEvaluatorFactory } from "./workspaceGuardRuntimeEvaluatorFactory";

import type { WorkspaceGuardRuntime } from "./workspaceGuardRuntimeTypes";
import type { WorkspaceGuardRuntimeEvaluation } from "./workspaceGuardRuntimeEvaluationTypes";

export class DefaultWorkspaceGuardRuntime
  implements WorkspaceGuardRuntime
{
  private readonly evaluator =
    WorkspaceGuardRuntimeEvaluatorFactory.create();

  async evaluate(
    pathname: string
  ): Promise<WorkspaceGuardRuntimeEvaluation> {
    return this.evaluator.evaluate(pathname);
  }
}