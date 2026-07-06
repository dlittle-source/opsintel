import { DefaultWorkspaceGuardRuntimeProvider } from "./workspaceGuardRuntimeProvider";

import type {
  WorkspaceGuardRuntimeProvider,
} from "./workspaceGuardRuntimeProviderTypes";

export class WorkspaceGuardRuntimeProviderFactory {
  static create(): WorkspaceGuardRuntimeProvider {
    return new DefaultWorkspaceGuardRuntimeProvider();
  }
}