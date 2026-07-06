import { MiddlewareRuntimeServiceFactory } from "./middlewareRuntimeServiceFactory";

import type {
  WorkspaceGuardRuntimeEvaluation,
  WorkspaceGuardRuntimeEvaluator,
} from "./workspaceGuardRuntimeEvaluationTypes";

export class DefaultWorkspaceGuardRuntimeEvaluator
  implements WorkspaceGuardRuntimeEvaluator
{
  private readonly runtimeService =
    MiddlewareRuntimeServiceFactory.create();

  async evaluate(
    pathname: string
  ): Promise<WorkspaceGuardRuntimeEvaluation> {
    const decision =
      await this.runtimeService.evaluate(pathname);

    return {
      pathname,
      decision,
    };
  }
}