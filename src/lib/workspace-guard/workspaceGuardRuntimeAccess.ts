import { WorkspaceGuardRuntimeIntegrationFactory } from "./workspaceGuardRuntimeIntegrationFactory";

import type {
  WorkspaceGuardRuntimeAccess,
} from "./workspaceGuardRuntimeAccessTypes";

import type {
  WorkspaceGuardRuntimeEvaluation,
} from "./workspaceGuardRuntimeEvaluationTypes";

export class DefaultWorkspaceGuardRuntimeAccess
  implements WorkspaceGuardRuntimeAccess
{
  private readonly integration =
    WorkspaceGuardRuntimeIntegrationFactory.create();

  async evaluate(
    pathname: string
  ): Promise<WorkspaceGuardRuntimeEvaluation> {
    return this.integration.evaluate(pathname);
  }
}