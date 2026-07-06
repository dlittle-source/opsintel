import { DefaultWorkspaceGuardRuntimeCoordinator } from "./workspaceGuardRuntimeCoordinator";

import type {
  WorkspaceGuardRuntimeCoordinator,
} from "./workspaceGuardRuntimeCoordinatorTypes";

export class WorkspaceGuardRuntimeCoordinatorFactory {
  static create(): WorkspaceGuardRuntimeCoordinator {
    return new DefaultWorkspaceGuardRuntimeCoordinator();
  }
}