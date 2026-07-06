import { ProtectedWorkspaceRouteRegistry } from "./protectedWorkspaceRouteRegistry";
import type { ProtectedWorkspaceRouteResult } from "./protectedWorkspaceRouteResult";

export class ProtectedWorkspaceResolver {
  constructor(
    private readonly registry = new ProtectedWorkspaceRouteRegistry()
  ) {}

  resolve(pathname: string): ProtectedWorkspaceRouteResult {
    return this.registry.find(pathname);
  }
}