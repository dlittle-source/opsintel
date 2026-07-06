import { ProtectedWorkspaceContextService } from "./protectedWorkspaceContextService";

export class ProtectedWorkspaceContextFactory {
  static create(): ProtectedWorkspaceContextService {
    return new ProtectedWorkspaceContextService();
  }
}