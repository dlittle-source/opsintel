import { WorkspaceGuardRuntimeBridgeFactory } from "./workspaceGuardRuntimeBridgeFactory";

import type { WorkspaceGuardFacade } from "./workspaceGuardFacadeTypes";
import type { WorkspaceGuardRuntimeEvaluation } from "./workspaceGuardRuntimeEvaluationTypes";

export class DefaultWorkspaceGuardFacade
  implements WorkspaceGuardFacade
{
  private readonly bridge =
    WorkspaceGuardRuntimeBridgeFactory.create();

  async evaluate(
    pathname: string
  ): Promise<WorkspaceGuardRuntimeEvaluation> {
    return this.bridge.evaluate(pathname);
  }
}