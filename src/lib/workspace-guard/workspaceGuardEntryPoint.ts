import { WorkspaceGuardFacadeFactory } from "./workspaceGuardFacadeFactory";

import type {
  WorkspaceGuardEntryPoint,
} from "./workspaceGuardEntryPointTypes";

import type {
  WorkspaceGuardRuntimeEvaluation,
} from "./workspaceGuardRuntimeEvaluationTypes";

export class DefaultWorkspaceGuardEntryPoint
  implements WorkspaceGuardEntryPoint
{
  private readonly facade =
    WorkspaceGuardFacadeFactory.create();

  async evaluate(
    pathname: string
  ): Promise<WorkspaceGuardRuntimeEvaluation> {
    return this.facade.evaluate(pathname);
  }
}