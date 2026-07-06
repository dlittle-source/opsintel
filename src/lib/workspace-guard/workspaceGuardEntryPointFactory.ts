import { DefaultWorkspaceGuardEntryPoint } from "./workspaceGuardEntryPoint";

import type { WorkspaceGuardEntryPoint } from "./workspaceGuardEntryPointTypes";

export class WorkspaceGuardEntryPointFactory {
  static create(): WorkspaceGuardEntryPoint {
    return new DefaultWorkspaceGuardEntryPoint();
  }
}