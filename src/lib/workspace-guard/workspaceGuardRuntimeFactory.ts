import { DefaultWorkspaceGuardRuntime } from "./workspaceGuardRuntime";

import type { WorkspaceGuardRuntime } from "./workspaceGuardRuntimeTypes";

export class WorkspaceGuardRuntimeFactory {
  static create(): WorkspaceGuardRuntime {
    return new DefaultWorkspaceGuardRuntime();
  }
}