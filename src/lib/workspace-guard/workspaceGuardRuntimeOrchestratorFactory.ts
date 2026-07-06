import { DefaultWorkspaceGuardRuntimeOrchestrator } from "./workspaceGuardRuntimeOrchestrator";

import type {
  WorkspaceGuardRuntimeOrchestrator,
} from "./workspaceGuardRuntimeOrchestratorTypes";

export class WorkspaceGuardRuntimeOrchestratorFactory {
  static create(): WorkspaceGuardRuntimeOrchestrator {
    return new DefaultWorkspaceGuardRuntimeOrchestrator();
  }
}