import { DefaultWorkspaceGuardRuntimeBridge } from "./workspaceGuardRuntimeBridge";

import type { WorkspaceGuardRuntimeBridge } from "./workspaceGuardRuntimeBridgeTypes";

export class WorkspaceGuardRuntimeBridgeFactory {
  static create(): WorkspaceGuardRuntimeBridge {
    return new DefaultWorkspaceGuardRuntimeBridge();
  }
}