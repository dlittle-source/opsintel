import { WorkspaceGuardEntryPointFactory } from "./workspaceGuardEntryPointFactory";

import type {
  WorkspaceGuardRuntimeBootstrap,
} from "./workspaceGuardRuntimeBootstrapTypes";

import type {
  WorkspaceGuardRuntimeEvaluation,
} from "./workspaceGuardRuntimeEvaluationTypes";

export class DefaultWorkspaceGuardRuntimeBootstrap
  implements WorkspaceGuardRuntimeBootstrap
{
  private readonly entryPoint =
    WorkspaceGuardEntryPointFactory.create();

  async evaluate(
    pathname: string
  ): Promise<WorkspaceGuardRuntimeEvaluation> {
    return this.entryPoint.evaluate(pathname);
  }
}