import { DefaultWorkspaceGuardRuntimeProviderConsumerEngine } from "./workspaceGuardRuntimeProviderConsumerEngine";

import type {
  WorkspaceGuardRuntimeProviderConsumerOrchestrator,
} from "./workspaceGuardRuntimeProviderConsumerOrchestratorTypes";

export function createWorkspaceGuardRuntimeProviderConsumerEngine(
  orchestrator: WorkspaceGuardRuntimeProviderConsumerOrchestrator,
): DefaultWorkspaceGuardRuntimeProviderConsumerEngine {
  return new DefaultWorkspaceGuardRuntimeProviderConsumerEngine(
    orchestrator,
  );
}