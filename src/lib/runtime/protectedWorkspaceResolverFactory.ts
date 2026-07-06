import { ProtectedWorkspaceResolver } from "./protectedWorkspaceResolver";

export class ProtectedWorkspaceResolverFactory {
  static create(): ProtectedWorkspaceResolver {
    return new ProtectedWorkspaceResolver();
  }
}