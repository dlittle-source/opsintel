import { WorkspaceGuardRuntimeEngineFactory } from "./workspaceGuardRuntimeEngineFactory";

import type {
  WorkspaceGuardRuntimeProvider,
} from "./workspaceGuardRuntimeProviderTypes";

import type {
  WorkspaceGuardRuntimeEvaluation,
} from "./workspaceGuardRuntimeEvaluationTypes";

export class DefaultWorkspaceGuardRuntimeProvider
  implements WorkspaceGuardRuntimeProvider
{
  private readonly engine =
    WorkspaceGuardRuntimeEngineFactory.create();

  async evaluate(
    pathname: string
  ): Promise<WorkspaceGuardRuntimeEvaluation> {
    return this.engine.evaluate(pathname);
  }
}