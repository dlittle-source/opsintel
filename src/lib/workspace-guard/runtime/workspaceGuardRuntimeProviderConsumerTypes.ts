import type {
  WorkspaceGuardRuntimeProvider,
  WorkspaceGuardRuntimeProviderInput,
  WorkspaceGuardRuntimeProviderResult,
} from "./workspaceGuardRuntimeProviderTypes";

export type WorkspaceGuardRuntimeProviderConsumerInput =
  WorkspaceGuardRuntimeProviderInput;

export type WorkspaceGuardRuntimeProviderConsumerResult =
  WorkspaceGuardRuntimeProviderResult;

export type WorkspaceGuardRuntimeProviderConsumer =
  WorkspaceGuardRuntimeProvider;

export type WorkspaceGuardRuntimeProviderConsumerFactory = () => {
  consumer: WorkspaceGuardRuntimeProviderConsumer;
};