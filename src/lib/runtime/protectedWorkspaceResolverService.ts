import { ProtectedWorkspaceResolver } from "./protectedWorkspaceResolver";
import type { ProtectedWorkspaceRouteResult } from "./protectedWorkspaceRouteResult";

export class ProtectedWorkspaceResolverService {
  constructor(
    private readonly resolver = new ProtectedWorkspaceResolver()
  ) {}

  resolve(pathname: string): ProtectedWorkspaceRouteResult {
    return this.resolver.resolve(pathname);
  }
}