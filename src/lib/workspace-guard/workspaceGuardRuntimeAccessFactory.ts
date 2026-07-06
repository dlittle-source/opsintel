import { DefaultWorkspaceGuardRuntimeAccess } from "./workspaceGuardRuntimeAccess";

import type { WorkspaceGuardRuntimeAccess } from "./workspaceGuardRuntimeAccessTypes";

export class WorkspaceGuardRuntimeAccessFactory {
  static create(): WorkspaceGuardRuntimeAccess {
    return new DefaultWorkspaceGuardRuntimeAccess();
  }
}