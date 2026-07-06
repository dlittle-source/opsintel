import { ProtectedWorkspaceOrchestrator } from "./protectedWorkspaceOrchestrator";

export class ProtectedWorkspaceOrchestratorFactory {
  static create(): ProtectedWorkspaceOrchestrator {
    return new ProtectedWorkspaceOrchestrator();
  }
}