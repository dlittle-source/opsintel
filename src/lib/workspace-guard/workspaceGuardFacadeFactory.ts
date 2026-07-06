import { DefaultWorkspaceGuardFacade } from "./workspaceGuardFacade";

import type { WorkspaceGuardFacade } from "./workspaceGuardFacadeTypes";

export class WorkspaceGuardFacadeFactory {
  static create(): WorkspaceGuardFacade {
    return new DefaultWorkspaceGuardFacade();
  }
}