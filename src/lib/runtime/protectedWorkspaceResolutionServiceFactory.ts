import { ProtectedWorkspaceResolverService } from "./protectedWorkspaceResolverService";

export class ProtectedWorkspaceResolutionServiceFactory {
  static create(): ProtectedWorkspaceResolverService {
    return new ProtectedWorkspaceResolverService();
  }
}