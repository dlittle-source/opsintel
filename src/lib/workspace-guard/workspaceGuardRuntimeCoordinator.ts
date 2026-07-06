import { WorkspaceGuardRuntimeBootstrapFactory } from "./workspaceGuardRuntimeBootstrapFactory";

import type {
  WorkspaceGuardRuntimeCoordinator,
} from "./workspaceGuardRuntimeCoordinatorTypes";

import type {
  WorkspaceGuardRuntimeEvaluation,
} from "./workspaceGuardRuntimeEvaluationTypes";

export class DefaultWorkspaceGuardRuntimeCoordinator
  implements WorkspaceGuardRuntimeCoordinator
{
  private readonly bootstrap =
    WorkspaceGuardRuntimeBootstrapFactory.create();

  async evaluate(
    pathname: string
  ): Promise<WorkspaceGuardRuntimeEvaluation> {
    return this.bootstrap.evaluate(pathname);
  }
}