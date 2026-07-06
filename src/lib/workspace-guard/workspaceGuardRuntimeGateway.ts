import { WorkspaceGuardRuntimeAccessFactory } from "./workspaceGuardRuntimeAccessFactory";

import type {
  WorkspaceGuardRuntimeGateway,
} from "./workspaceGuardRuntimeGatewayTypes";

import type {
  WorkspaceGuardRuntimeEvaluation,
} from "./workspaceGuardRuntimeEvaluationTypes";

export class DefaultWorkspaceGuardRuntimeGateway
  implements WorkspaceGuardRuntimeGateway
{
  private readonly runtimeAccess =
    WorkspaceGuardRuntimeAccessFactory.create();

  async evaluate(
    pathname: string
  ): Promise<WorkspaceGuardRuntimeEvaluation> {
    return this.runtimeAccess.evaluate(pathname);
  }
}