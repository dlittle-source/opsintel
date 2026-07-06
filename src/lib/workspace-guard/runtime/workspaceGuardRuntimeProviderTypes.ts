import type {
  WorkspaceGuardRuntimeEngineInput,
  WorkspaceGuardRuntimeEngineResult,
} from "./workspaceGuardRuntimeEngineTypes";

export type WorkspaceGuardRuntimeProviderInput =
  WorkspaceGuardRuntimeEngineInput;

export type WorkspaceGuardRuntimeProviderResult =
  WorkspaceGuardRuntimeEngineResult;

export type WorkspaceGuardRuntimeProvider = {
  provide: (
    input: WorkspaceGuardRuntimeProviderInput,
  ) => Promise<WorkspaceGuardRuntimeProviderResult>;
};