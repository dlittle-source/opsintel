import { WorkspaceGuardService } from "@/lib/runtime/workspaceGuardService";

export class WorkspaceGuardFactory {
  createService(): WorkspaceGuardService {
    return new WorkspaceGuardService();
  }
}

export const workspaceGuardFactory =
  new WorkspaceGuardFactory();