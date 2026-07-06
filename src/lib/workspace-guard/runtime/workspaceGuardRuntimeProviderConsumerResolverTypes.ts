import type { WorkspaceGuardRuntimeProviderConsumer } from "./workspaceGuardRuntimeProviderConsumerTypes";

export interface WorkspaceGuardRuntimeProviderConsumerResolver {
  resolve(
    key: string,
  ): WorkspaceGuardRuntimeProviderConsumer | undefined;
}

export interface WorkspaceGuardRuntimeProviderConsumerResolverInput {
  key: string;
}

export type WorkspaceGuardRuntimeProviderConsumerResolverResult =
  | WorkspaceGuardRuntimeProviderConsumer
  | undefined;