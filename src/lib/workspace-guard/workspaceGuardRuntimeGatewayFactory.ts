import { DefaultWorkspaceGuardRuntimeGateway } from "./workspaceGuardRuntimeGateway";

import type { WorkspaceGuardRuntimeGateway } from "./workspaceGuardRuntimeGatewayTypes";

export class WorkspaceGuardRuntimeGatewayFactory {
  static create(): WorkspaceGuardRuntimeGateway {
    return new DefaultWorkspaceGuardRuntimeGateway();
  }
}