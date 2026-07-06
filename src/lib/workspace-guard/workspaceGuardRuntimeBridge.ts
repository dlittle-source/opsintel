import { WorkspaceGuardRuntimeGatewayFactory } from "./workspaceGuardRuntimeGatewayFactory";

import type {
  WorkspaceGuardRuntimeBridge,
} from "./workspaceGuardRuntimeBridgeTypes";

import type {
  WorkspaceGuardRuntimeEvaluation,
} from "./workspaceGuardRuntimeEvaluationTypes";

export class DefaultWorkspaceGuardRuntimeBridge
  implements WorkspaceGuardRuntimeBridge
{
  private readonly gateway =
    WorkspaceGuardRuntimeGatewayFactory.create();

  async evaluate(
    pathname: string
  ): Promise<WorkspaceGuardRuntimeEvaluation> {
    return this.gateway.evaluate(pathname);
  }
}