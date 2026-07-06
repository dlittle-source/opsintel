import { DefaultWorkspaceGuardRuntimeEngine } from "./workspaceGuardRuntimeEngine";

import type {
  WorkspaceGuardRuntimeEngine,
} from "./workspaceGuardRuntimeEngineTypes";

export class WorkspaceGuardRuntimeEngineFactory {
  static create(): WorkspaceGuardRuntimeEngine {
    return new DefaultWorkspaceGuardRuntimeEngine();
  }
}