import { DefaultWorkspaceGuardRuntimeBootstrap } from "./workspaceGuardRuntimeBootstrap";

import type { WorkspaceGuardRuntimeBootstrap } from "./workspaceGuardRuntimeBootstrapTypes";

export class WorkspaceGuardRuntimeBootstrapFactory {
  static create(): WorkspaceGuardRuntimeBootstrap {
    return new DefaultWorkspaceGuardRuntimeBootstrap();
  }
}