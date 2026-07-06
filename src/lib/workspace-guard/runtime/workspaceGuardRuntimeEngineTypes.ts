import type { WorkspaceGuardRuntimeOrchestrator } from "../workspaceGuardRuntimeOrchestratorTypes";

export type WorkspaceGuardRuntimeEngineInput = string;

export type WorkspaceGuardRuntimeEngineResult =
  Awaited<ReturnType<WorkspaceGuardRuntimeOrchestrator["evaluate"]>>;